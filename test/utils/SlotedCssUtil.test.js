const assert = require('assert');
const cssbeautify = require('cssbeautify');

const slotedCssUtil = require('../../src/utils/SlotedCssUtil');

describe('slotedCssUtil', function () {

  const style = "@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,.16)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,.16)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.04em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent;will-change:transform,opacity;display:inline-block;position:relative;box-sizing:border-box;min-width:64px;height:36px;padding:0 16px;border:none;outline:none;text-align:center;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:2px}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button:before{transition:opacity 15ms linear}.mdc-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:.15s mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded:before,.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-ripple-upgraded--unbounded:before{top:var(--mdc-ripple-top,0%);left:var(--mdc-ripple-left,0%);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-ripple-upgraded--unbounded:before,.mdc-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}.mdc-button--theme-dark .mdc-button:disabled,.mdc-theme--dark .mdc-button:disabled{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))}.mdc-button:not(:disabled){background-color:transparent;color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button:after,.mdc-button:before{background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button:hover:before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused:before,.mdc-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.16}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-button--theme-dark .mdc-button--raised:disabled,.mdc-button--theme-dark .mdc-button--unelevated:disabled,.mdc-theme--dark .mdc-button--raised:disabled,.mdc-theme--dark .mdc-button--unelevated:disabled{background-color:hsla(0,0%,100%,.12);color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-text-primary-on-primary,#fff)}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-text-primary-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.32}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--stroked{border-style:solid;padding-right:14px;padding-left:14px;border-width:2px;line-height:32px}.mdc-button--stroked:disabled{border-color:rgba(0,0,0,.38);border-color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-button--theme-dark .mdc-button--stroked:disabled,.mdc-theme--dark .mdc-button--stroked:disabled{border-color:hsla(0,0%,100%,.5);border-color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))}.mdc-button--stroked.mdc-button--dense{line-height:27px}.mdc-button--stroked.mdc-button--compact{padding-right:6px;padding-left:6px}.mdc-button--stroked:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-button--compact{padding:0 8px}.mdc-button--dense{height:32px;font-size:.8125rem;line-height:32px}.mdc-button__icon{display:inline-block;width:18px;height:18px;margin-right:8px;font-size:18px;line-height:inherit;vertical-align:top}"

  it('should return -1 when the value is not present', function () {
    const beautify = cssbeautify(style);
    const sloted =  slotedCssUtil(beautify)

    const split = sloted.split(/\r?\n/);

    assert.equal('@keyframes mdc-ripple-fg-radius-in {', split[0])
    assert.equal('@keyframes mdc-ripple-fg-opacity-out {', split[22])

  });

});