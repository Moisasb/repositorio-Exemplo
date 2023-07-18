import { LitElement, html, css } from "lit";

export class Bolinhas extends LitElement {
  static styles = [
    css`
      :host {
        width: 100px;
        height: 100px;

        background-color: black;
        -webkit-mask: url("bolinhas.svg") no-repeat center;
        mask: url("bolinhas.svg") no-repeat center;

        -webkit-mask-size: 100%;
        mask-size: 100%;

        display: block;
      }

      .inteira {
        -webkit-mask: url("bolinhas.svg") no-repeat center;

        mask: url("bolinhas.svg") no-repeat center;
      }

      .fila-preenchida {
        -webkit-mask: url("bolinhascheia.svg") no-repeat center;

        mask: url("bolinhasvazia.svg") no-repeat center;
      }

      .fila-vazada {
        -webkit-mask: url("bolinhasvazia.svg") no-repeat center;

        mask: url("bolinhascheia.svg") no-repeat center;
      }

      .bolinhas {
        width: 100%;

        height: 100%;

        -webkit-mask-size: 100%;

        mask-size: 100%;

        background-color: var(--cor-bolinhas) black;
      }
    `,
  ];

  /**

* Define o formato das bolinhas

* @returns Classe do formato

*/

  definirFormato() {
    if (this.formato === "fila-preenchidda") {
      return "fila-preenchida";
    }

    if (this.formato === "fila-vazada") {
      return "fila-vazada";
    }

    if (this.formato === "metade") {
      return "metade";
    }

    return "inteira";
  }

  render() {
    return html`<div class=${`bolinhas ${this.definirFormato}`}></div> `;
  }
}

customElements.define("app-bolinhas", Bolinhas);