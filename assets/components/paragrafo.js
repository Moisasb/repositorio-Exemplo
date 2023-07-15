import { LitElement, html, css } from "lit";

export class Paragrafo extends LitElement {
  static styles = [
    css`
      :host {
        color: var(--cor-secundsria, #665e57);
        font-family: Source Serif Pro;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: 100%;
      }

      p {
       margin: 0;  

      }
    `,

    
  ];

  render() {
    return html`<slot>Paragrafo</slot>
    
    
    `;
  }
}
customElements.define("app-paragrafo", Paragrafo);
