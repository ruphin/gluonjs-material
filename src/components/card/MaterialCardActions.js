import {MaterialElement} from "../MaterialElement";

import CardStyle from "@material/card/mdc-card";
import {MaterialStyle} from "../MaterialStyle";

const block = `:host {display:block}`

class MaterialCardActions extends MaterialElement {

  get styles() {
    return [
      MaterialStyle.block,
      CardStyle.actions
    ]
  }

  get classes() {
    return [
      'mdc-card__actions'
    ]
  }

}

customElements.define(MaterialCardActions.is, MaterialCardActions);