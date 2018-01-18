!function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=5)}([function(t,e,i){"use strict";e.b=function(t,e){Object(a.e)(t,e,n)};var a=i(1);i.d(e,"a",function(){return a.d});const n=(t,e,i)=>{if("attribute"===e.type){if(e.rawName.startsWith("on-"))return new class{constructor(t,e,i){this.instance=t,this.element=e,this.eventName=i}setValue(t){const e=Object(a.c)(this,t),i=this._listener;e!==i&&(this._listener=e,null!=i&&this.element.removeEventListener(this.eventName,i),null!=e&&this.element.addEventListener(this.eventName,e))}}(t,i,e.rawName.slice(3));if(e.name.endsWith("$")){const n=e.name.slice(0,-1);return new a.a(t,i,n,e.strings)}return new class extends a.a{setValue(t,e){const i=this.strings;let n;n=2===i.length&&""===i[0]&&""===i[1]?Object(a.c)(this,t[e]):this._interpolate(t,e),this.element[this.name]=n}}(t,i,e.rawName,e.strings)}return Object(a.b)(t,e,i)}},function(t,e,i){"use strict";e.e=function(t,e,i=v){let a=e.__templateInstance;if(void 0!==a&&a.template===t.template&&a._partCallback===i)return void a.update(t.values);a=new y(t.template,i),e.__templateInstance=a;const n=a._clone();a.update(t.values),A(e,e.firstChild),e.appendChild(n)};const a=(t=>t()==t())(()=>t=>t``),n=new Map;new Map;e.d=((t,...e)=>r(t,e,n,!1));function r(t,e,i,n){const r=a?t:t.join("{{--uniqueness-workaround--}}");let o=i.get(r);return void 0===o&&(o=new h(t,n),i.set(r,o)),new s(o,e)}class s{constructor(t,e){this.template=t,this.values=e}}const o=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${o}--\x3e`,c=new RegExp(`${o}|${d}`),l=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function u(t){const e=t.lastIndexOf(">");return t.indexOf("<",e+1)>-1?t.length:e}class p{constructor(t,e,i,a,n){this.type=t,this.index=e,this.name=i,this.rawName=a,this.strings=n}}class h{constructor(t,e=!1){this.parts=[];const i=this.element=document.createElement("template");i.innerHTML=this._getHtml(t,e);const a=i.content;if(e){const t=a.firstChild;a.removeChild(t),x(a,t.firstChild)}const n=document.createTreeWalker(a,133,null,!1);let r=-1,s=0;const d=[];let u,h;for(;n.nextNode();){r++,u=h;const e=h=n.currentNode;if(1===e.nodeType){if(!e.hasAttributes())continue;const i=e.attributes;let a=0;for(let t=0;t<i.length;t++)i[t].value.indexOf(o)>=0&&a++;for(;a-- >0;){const a=t[s],n=l.exec(a)[1],o=i.getNamedItem(n),d=o.value.split(c);this.parts.push(new p("attribute",r,o.name,n,d)),e.removeAttribute(o.name),s+=d.length-1}}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(o)<0)continue;const i=e.parentNode,a=t.split(c),n=a.length-1;s+=n,e.textContent=a[n];for(let t=0;t<n;t++)i.insertBefore(document.createTextNode(a[t]),e),this.parts.push(new p("node",r++))}else if(8===e.nodeType&&e.nodeValue===o){const t=e.parentNode,i=e.previousSibling;null===i||i!==u||i.nodeType!==Node.TEXT_NODE?t.insertBefore(document.createTextNode(""),e):r--,this.parts.push(new p("node",r++)),d.push(e),null===e.nextSibling?t.insertBefore(document.createTextNode(""),e):r--,h=u,s++}}for(const t of d)t.parentNode.removeChild(t)}_getHtml(t,e){const i=t.length-1;let a="",n=!0;for(let e=0;e<i;e++){const i=t[e];a+=i;const r=u(i);a+=(n=r>-1?r<i.length:n)?d:o}return a+=t[i],e?`<svg>${a}</svg>`:a}}const m=(t,e)=>f(e)?(e=e(t),b):null===e?void 0:e;e.c=m;const f=t=>"function"==typeof t&&!0===t.__litDirective,b={};class g{constructor(t,e,i,a){this.instance=t,this.element=e,this.name=i,this.strings=a,this.size=a.length-1}_interpolate(t,e){const i=this.strings,a=i.length-1;let n="";for(let r=0;r<a;r++){n+=i[r];const a=m(this,t[e+r]);if(a&&a!==b&&(Array.isArray(a)||"string"!=typeof a&&a[Symbol.iterator]))for(const t of a)n+=t;else n+=a}return n+i[a]}setValue(t,e){const i=this._interpolate(t,e);this.element.setAttribute(this.name,i)}}e.a=g;class _{constructor(t,e,i){this.instance=t,this.startNode=e,this.endNode=i,this._previousValue=void 0}setValue(t){if((t=m(this,t))!==b)if(null===t||"object"!=typeof t&&"function"!=typeof t){if(t===this._previousValue)return;this._setText(t)}else t instanceof s?this._setTemplateResult(t):Array.isArray(t)||t[Symbol.iterator]?this._setIterable(t):t instanceof Node?this._setNode(t):void 0!==t.then?this._setPromise(t):this._setText(t)}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_setNode(t){this._previousValue!==t&&(this.clear(),this._insert(t),this._previousValue=t)}_setText(t){const e=this.startNode.nextSibling;t=void 0===t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._setNode(document.createTextNode(t)),this._previousValue=t}_setTemplateResult(t){let e;this._previousValue&&this._previousValue.template===t.template?e=this._previousValue:(e=new y(t.template,this.instance._partCallback),this._setNode(e._clone()),this._previousValue=e),e.update(t.values)}_setIterable(t){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const e=this._previousValue;let i=0;for(const a of t){let t=e[i];if(void 0===t){let a=this.startNode;if(i>0)a=e[i-1].endNode=document.createTextNode(""),this._insert(a);t=new _(this.instance,a,this.endNode),e.push(t)}t.setValue(a),i++}if(0===i)this.clear(),this._previousValue=void 0;else if(i<e.length){const t=e[i-1];e.length=i,this.clear(t.endNode.previousSibling),t.endNode=this.endNode}}_setPromise(t){this._previousValue=t,t.then(e=>{this._previousValue===t&&this.setValue(e)})}clear(t=this.startNode){A(this.startNode.parentNode,t.nextSibling,this.endNode)}}const v=(t,e,i)=>{if("attribute"===e.type)return new g(t,i,e.name,e.strings);if("node"===e.type)return new _(t,i,i.nextSibling);throw new Error(`Unknown part type ${e.type}`)};e.b=v;class y{constructor(t,e=v){this._parts=[],this.template=t,this._partCallback=e}update(t){let e=0;for(const i of this._parts)void 0===i.size?(i.setValue(t[e]),e++):(i.setValue(t,e),e+=i.size)}_clone(){const t=document.importNode(this.template.element.content,!0),e=this.template.parts;if(e.length>0){const i=document.createTreeWalker(t,133,null,!1);let a=-1;for(let t=0;t<e.length;t++){const n=e[t];for(;a<n.index;)a++,i.nextNode();this._parts.push(this._partCallback(this,n,i.currentNode))}}return t}}const x=(t,e,i=null,a=null)=>{let n=e;for(;n!==i;){const e=n.nextSibling;t.insertBefore(n,a),n=e}},A=(t,e,i=null)=>{let a=e;for(;a!==i;){const e=a.nextSibling;t.removeChild(a),a=e}}},function(t,e,i){"use strict";e.a=class{static get cssClasses(){return{}}static get strings(){return{}}static get numbers(){return{}}static get defaultAdapter(){return{}}constructor(t={}){this.adapter_=t}init(){}destroy(){}}},function(t,e,i){"use strict"},function(t,e,i){"use strict";let a,n;function r(t,e=!1){if("boolean"==typeof a&&!e)return a;if(!(t.CSS&&"function"==typeof t.CSS.supports))return;const i=t.CSS.supports("--css-vars","yes"),n=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000");return a=!(!i&&!n)&&!function(t){const e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);const a=t.getComputedStyle(i),n=null!==a&&"solid"===a.borderTopStyle;return i.remove(),n}(t)}function s(t=window,e=!1){if(void 0===n||e){let e=!1;try{t.document.addEventListener("test",null,{get passive(){e=!0}})}catch(t){}n=e}return!!n&&{passive:!0}}function o(t){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(e=>e in t).pop()}function d(t,e,i){const{x:a,y:n}=e,r=a+i.left,s=n+i.top;let o,d;return"touchstart"===t.type?(o=t.changedTouches[0].pageX-r,d=t.changedTouches[0].pageY-s):(o=t.pageX-r,d=t.pageY-s),{x:o,y:d}}i.d(e,"d",function(){return r}),i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o}),i.d(e,"c",function(){return d})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(6),n=i(7),r=i.n(n),s=i(10);class o extends a.a{constructor(){super(),this.isText=!0}get template(){return this.isText?a["b"]`<style>${r.a}</style><button class="mdc-button"><slot></slot></button>`:a["b"]`<style>${r.a}</style><slot></slot>`}get icon(){return"left"}connectedCallback(){super.connectedCallback();const t=this.shadowRoot.querySelector("slot");if(null!=t&&t.assignedNodes().length>1){console.log("assignedNodese",t.assignedNodes()),this.isText=!1;const e=this.querySelector("button, a");e.classList.add("mdc-button"),new s.a(e)}else{const t=this.shadowRoot.querySelector(".mdc-button");new s.a(t)}this.render()}}customElements.define(o.is,o)},function(t,e,i){"use strict";var a=i(0);i.d(e,"b",function(){return a.a});const n=Symbol("tag"),r=Symbol("needsRender"),s=Symbol("shadyTemplate"),o=t=>{if(window.ShadyCSS){const e=t.constructor;void 0===e[s]&&(e[s]=document.createElement("template"),e[s].innerHTML=t.shadowRoot.innerHTML,ShadyCSS.prepareTemplate(e[s],e.is)),ShadyCSS.styleElement(t)}},d=t=>t.replace(/([a-z])([A-Z])|(.)([A-Z][a-z])/g,"$1$3-$2$4").toLowerCase(),c=t=>{t.$={},t.shadowRoot.querySelectorAll("[id]").forEach(e=>{t.$[e.id]=e})};e.a=class extends HTMLElement{static get is(){return this.hasOwnProperty(n)&&this[n]||(this[n]=d(this.name))}connectedCallback(){"template"in this&&(this.attachShadow({mode:"open"}),this.render({sync:!0}),c(this))}async render({sync:t=!1}={}){this[r]=!0,t||await 0,this[r]&&(this[r]=!1,Object(a.b)(this.template,this.shadowRoot),o(this))}}},function(t,e,i){var a=i(8);t.exports="string"==typeof a?a:a.toString()},function(t,e,i){(t.exports=i(9)(!1)).push([t.i,'@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,.16)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,.16)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.04em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent;will-change:transform,opacity;display:inline-block;position:relative;box-sizing:border-box;min-width:64px;height:36px;padding:0 16px;border:none;outline:none;text-align:center;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:2px}.mdc-button:after,.mdc-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button:before{transition:opacity 15ms linear}.mdc-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation:after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:.15s mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded:before,.mdc-button:after,.mdc-button:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-ripple-upgraded--unbounded:before{top:var(--mdc-ripple-top,0%);left:var(--mdc-ripple-left,0%);transform:scale(var(--mdc-ripple-fg-scale,0))}.mdc-button.mdc-ripple-upgraded--unbounded:before,.mdc-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}.mdc-button--theme-dark .mdc-button:disabled,.mdc-theme--dark .mdc-button:disabled{color:hsla(0,0%,100%,.5);color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))}.mdc-button:not(:disabled){background-color:transparent;color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button:after,.mdc-button:before{background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button:after,.mdc-button:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button:hover:before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused:before,.mdc-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.16}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-button--theme-dark .mdc-button--raised:disabled,.mdc-button--theme-dark .mdc-button--unelevated:disabled,.mdc-theme--dark .mdc-button--raised:disabled,.mdc-theme--dark .mdc-button--unelevated:disabled{background-color:hsla(0,0%,100%,.12);color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align:auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-text-primary-on-primary,#fff)}.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-button--raised:after,.mdc-button--raised:before,.mdc-button--unelevated:after,.mdc-button--unelevated:before{background-color:var(--mdc-theme-text-primary-on-primary,#fff)}}.mdc-button--raised:hover:before,.mdc-button--unelevated:hover:before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused:before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus:before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused:before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded):after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active:after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.32}.mdc-button--raised{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised:focus,.mdc-button--raised:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--stroked{border-style:solid;padding-right:14px;padding-left:14px;border-width:2px;line-height:32px}.mdc-button--stroked:disabled{border-color:rgba(0,0,0,.38);border-color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))}.mdc-button--theme-dark .mdc-button--stroked:disabled,.mdc-theme--dark .mdc-button--stroked:disabled{border-color:hsla(0,0%,100%,.5);border-color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))}.mdc-button--stroked.mdc-button--dense{line-height:27px}.mdc-button--stroked.mdc-button--compact{padding-right:6px;padding-left:6px}.mdc-button--stroked:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-button--compact{padding:0 8px}.mdc-button--dense{height:32px;font-size:.8125rem;line-height:32px}.mdc-button__icon{display:inline-block;width:18px;height:18px;margin-right:8px;font-size:18px;line-height:inherit;vertical-align:top}',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",a=t[3];if(!a)return i;if(e&&"function"==typeof btoa){var n=(s=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[i].concat(r).concat([n]).join("\n")}var s;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},n=0;n<this.length;n++){var r=this[n][0];"number"==typeof r&&(a[r]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&a[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e,i){"use strict";i.d(e,"a",function(){return s});var a=i(11),n=(i(3),i(12)),r=i(4);class s extends a.a{constructor(...t){super(...t),this.disabled=!1,this.unbounded_}static attachTo(t,{isUnbounded:e}={}){const i=new s(t);return void 0!==e&&(i.unbounded=e),i}static createAdapter(t){const e=r.b(HTMLElement.prototype);return{browserSupportsCssVars:()=>r.d(window),isUnbounded:()=>t.unbounded,isSurfaceActive:()=>t.root_[e](":active"),isSurfaceDisabled:()=>t.disabled,addClass:e=>t.root_.classList.add(e),removeClass:e=>t.root_.classList.remove(e),registerInteractionHandler:(e,i)=>t.root_.addEventListener(e,i,r.a()),deregisterInteractionHandler:(e,i)=>t.root_.removeEventListener(e,i,r.a()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,r.a()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,r.a()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(e,i)=>t.root_.style.setProperty(e,i),computeBoundingRect:()=>t.root_.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}get unbounded(){return this.unbounded_}set unbounded(t){this.unbounded_=Boolean(t),this.setUnbounded_()}setUnbounded_(){this.foundation_.setUnbounded(this.unbounded_)}activate(){this.foundation_.activate()}deactivate(){this.foundation_.deactivate()}layout(){this.foundation_.layout()}getDefaultFoundation(){return new n.a(s.createAdapter(this))}initialSyncWithDOM(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}}class o{}o.prototype.root_,o.prototype.unbounded,o.prototype.disabled},function(t,e,i){"use strict";var a=i(2);class n{static attachTo(t){return new n(t,new a.a)}constructor(t,e,...i){this.root_=t,this.initialize(...i),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}initialize(){}getDefaultFoundation(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}initialSyncWithDOM(){}destroy(){this.foundation_.destroy()}listen(t,e){this.root_.addEventListener(t,e)}unlisten(t,e){this.root_.removeEventListener(t,e)}emit(t,e,i=!1){let a;"function"==typeof CustomEvent?a=new CustomEvent(t,{detail:e,bubbles:i}):(a=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(a)}}e.a=n},function(t,e,i){"use strict";var a=i(2),n=(i(3),i(13)),r=i(4);const s=["touchstart","pointerdown","mousedown","keydown"],o=["touchend","pointerup","mouseup"];class d extends a.a{static get cssClasses(){return n.a}static get strings(){return n.c}static get numbers(){return n.b}static get defaultAdapter(){return{browserSupportsCssVars:()=>{},isUnbounded:()=>{},isSurfaceActive:()=>{},isSurfaceDisabled:()=>{},addClass:()=>{},removeClass:()=>{},registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:()=>{},computeBoundingRect:()=>{},getWindowPageOffset:()=>{}}}constructor(t){super(Object.assign(d.defaultAdapter,t)),this.layoutFrame_=0,this.frame_={width:0,height:0},this.activationState_=this.defaultActivationState_(),this.xfDuration_=0,this.initialSize_=0,this.maxRadius_=0,this.activateHandler_=(t=>this.activate_(t)),this.deactivateHandler_=(t=>this.deactivate_(t)),this.focusHandler_=(()=>requestAnimationFrame(()=>this.adapter_.addClass(d.cssClasses.BG_FOCUSED))),this.blurHandler_=(()=>requestAnimationFrame(()=>this.adapter_.removeClass(d.cssClasses.BG_FOCUSED))),this.resizeHandler_=(()=>this.layout()),this.unboundedCoords_={left:0,top:0},this.fgScale_=0,this.activationTimer_=0,this.fgDeactivationRemovalTimer_=0,this.activationAnimationHasEnded_=!1,this.activationTimerCallback_=(()=>{this.activationAnimationHasEnded_=!0,this.runDeactivationUXLogicIfReady_()}),this.previousActivationEvent_=null}isSupported_(){return this.adapter_.browserSupportsCssVars()}defaultActivationState_(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:null,isProgrammatic:!1}}init(){if(!this.isSupported_())return;this.registerRootHandlers_();const{ROOT:t,UNBOUNDED:e}=d.cssClasses;requestAnimationFrame(()=>{this.adapter_.addClass(t),this.adapter_.isUnbounded()&&this.adapter_.addClass(e),this.layoutInternal_()})}destroy(){if(!this.isSupported_())return;this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_();const{ROOT:t,UNBOUNDED:e}=d.cssClasses;requestAnimationFrame(()=>{this.adapter_.removeClass(t),this.adapter_.removeClass(e),this.removeCssVars_()})}registerRootHandlers_(){s.forEach(t=>{this.adapter_.registerInteractionHandler(t,this.activateHandler_)}),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_),this.adapter_.registerResizeHandler(this.resizeHandler_)}registerDeactivationHandlers_(t){"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):o.forEach(t=>{this.adapter_.registerDocumentInteractionHandler(t,this.deactivateHandler_)})}deregisterRootHandlers_(){s.forEach(t=>{this.adapter_.deregisterInteractionHandler(t,this.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.deregisterResizeHandler(this.resizeHandler_)}deregisterDeactivationHandlers_(){this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),o.forEach(t=>{this.adapter_.deregisterDocumentInteractionHandler(t,this.deactivateHandler_)})}removeCssVars_(){const{strings:t}=d;Object.keys(t).forEach(e=>{0===e.indexOf("VAR_")&&this.adapter_.updateCssVariable(t[e],null)})}activate_(t){if(this.adapter_.isSurfaceDisabled())return;const{activationState_:e}=this;if(e.isActivated)return;const i=this.previousActivationEvent_;i&&t&&i.type!==t.type&&i.clientX===t.clientX&&i.clientY===t.clientY||(e.isActivated=!0,e.isProgrammatic=null===t,e.activationEvent=t,e.wasActivatedByPointer=!e.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),t&&this.registerDeactivationHandlers_(t),requestAnimationFrame(()=>{e.wasElementMadeActive=!t||"keydown"!==t.type||this.adapter_.isSurfaceActive(),e.wasElementMadeActive?this.animateActivation_():this.activationState_=this.defaultActivationState_()}))}activate(t=null){this.activate_(t)}animateActivation_(){const{VAR_FG_TRANSLATE_START:t,VAR_FG_TRANSLATE_END:e}=d.strings,{FG_DEACTIVATION:i,FG_ACTIVATION:a}=d.cssClasses,{DEACTIVATION_TIMEOUT_MS:n}=d.numbers;let r="",s="";if(!this.adapter_.isUnbounded()){const{startPoint:t,endPoint:e}=this.getFgTranslationCoordinates_();r=`${t.x}px, ${t.y}px`,s=`${e.x}px, ${e.y}px`}this.adapter_.updateCssVariable(t,r),this.adapter_.updateCssVariable(e,s),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(i),this.adapter_.computeBoundingRect(),this.adapter_.addClass(a),this.activationTimer_=setTimeout(()=>this.activationTimerCallback_(),n)}getFgTranslationCoordinates_(){const{activationState_:t}=this,{activationEvent:e,wasActivatedByPointer:i}=t;let a;return{startPoint:a={x:(a=i?Object(r.c)(e,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:a.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}runDeactivationUXLogicIfReady_(){const{FG_DEACTIVATION:t}=d.cssClasses,{hasDeactivationUXRun:e,isActivated:i}=this.activationState_;(e||!i)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout(()=>{this.adapter_.removeClass(t)},n.b.FG_DEACTIVATION_MS))}rmBoundedActivationClasses_(){const{FG_ACTIVATION:t}=d.cssClasses;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}resetActivationState_(){this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(()=>this.previousActivationEvent_=null,100)}deactivate_(t){const e=this.activationState_;if(!e.isActivated)return;const i=Object.assign({},e);if(e.isProgrammatic){const t=null;requestAnimationFrame(()=>this.animateDeactivation_(t,i)),this.resetActivationState_()}else this.deregisterDeactivationHandlers_(),requestAnimationFrame(()=>{this.activationState_.hasDeactivationUXRun=!0,this.animateDeactivation_(t,i),this.resetActivationState_()})}deactivate(t=null){this.deactivate_(t)}animateDeactivation_(t,{wasActivatedByPointer:e,wasElementMadeActive:i}){(e||i)&&this.runDeactivationUXLogicIfReady_()}layout(){this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(()=>{this.layoutInternal_(),this.layoutFrame_=0})}layoutInternal_(){this.frame_=this.adapter_.computeBoundingRect();const t=Math.max(this.frame_.height,this.frame_.width),e=Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2));this.initialSize_=t*d.numbers.INITIAL_ORIGIN_SCALE,this.maxRadius_=e+d.numbers.PADDING,this.fgScale_=this.maxRadius_/this.initialSize_,this.xfDuration_=1e3*Math.sqrt(this.maxRadius_/1024),this.updateLayoutCssVars_()}updateLayoutCssVars_(){const{VAR_FG_SIZE:t,VAR_LEFT:e,VAR_TOP:i,VAR_FG_SCALE:a}=d.strings;this.adapter_.updateCssVariable(t,`${this.initialSize_}px`),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(e,`${this.unboundedCoords_.left}px`),this.adapter_.updateCssVariable(i,`${this.unboundedCoords_.top}px`))}setUnbounded(t){const{UNBOUNDED:e}=d.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}}e.a=d},function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"c",function(){return n}),i.d(e,"b",function(){return r});const a={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},n={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},r={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150}}]);