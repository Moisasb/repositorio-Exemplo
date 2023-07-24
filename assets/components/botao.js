import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      button {
        width: inherit;

        display: inline-flex;
        height: 34px;
        padding: 10px 30px;
        justify-content: flex-start;
        align-items: center;

        border-radius: 8px;
        border: 0px;
        background-color: var(
          --button-background,
          color-mix(in srgb, white 20%, var(--tom-2, #b38962))
        );

        /* tipografia*/

        color: var(
          --color,
          color-mix (in srgb, white 20%, var(--tom-3, #664e38))
        );
        text-align: center;
        font-family: var(--fonte-titulo);
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: nowrap;

        transition: all 200ms;
        cursor: pointer;
      }

      button:hover,
      button:active {
        background-color: color-mix(
          in srgb,white 15%,
          var(--button-background, var(--tom-2))
        );
        color: var(--tom-1);
      }

      :slotted(*) {
        width: 24 px;
        width: 24px;
        margin: 5px 8px 5px 0em;
      }
    `,
  ];

  render() {
    return html`
      <button><slot name="icone"></slot> <slot>Pressione </slot></button>
    `;
  }
}

customElements.define("app-botao", Botao);
