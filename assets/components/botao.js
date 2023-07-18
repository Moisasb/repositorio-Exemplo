import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      button {
        display: inline-flex;
        padding: 10px 30px;

        border: 0;

        justify-content: center;

        align-items: center;

        
        border-radius: 8px;

        background-color: color-mix(in srgb, white 20%, var(--tom-2, #b38962));

        box-shadow: 0px 2px 4px 0px #665e57;


       /* tipografia*/

        color: var(--tom-3, #664e38);
        font-family: var(--fonte-titulo);
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        transition: all 200Ms;
        cursor: pointer;   
    
    }

      button:hover, 
      button:active {
        background-color: var(--tom-2, #b38962);
        
      }
    `,
  ];

  render() {
    return html` <button><slot>Pressione</slot></button> `;
  }
}

customElements.define("app-botao", Botao);