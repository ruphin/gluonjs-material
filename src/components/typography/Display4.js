import {MaterialElement, html} from "../MaterialElement";
import {MaterialStyle} from "../MaterialStyle";
import TypographyStyle from "@material/typography/mdc-typography";

class MaterialTypographyDisplay4 extends MaterialElement {

  get styles() {
    return [
      MaterialStyle.block,
      TypographyStyle.host
    ]
  }

  get classes() {
    return [
      'mdc-typography--display4'
    ]
  }

}

customElements.define(MaterialTypographyDisplay4.is, MaterialTypographyDisplay4);