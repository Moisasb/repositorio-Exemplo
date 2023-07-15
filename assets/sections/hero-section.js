import { LitElement, html, css } from "lit";
import { section } from "../styles/sections-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        width: 360px;
        height: 640px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.375rem;
      }

      section {
        display: flex;
        padding: 16px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      span {
        color: var(--tom-3);
        font-weight: 900;
      }

      app-titulo {
        position: relative;
        display: flex;
        align-items: center;
        align-self: stretch;
      }

      app-logo {
        width: 128px;
        height: 128px;
        position: absolute;
        right: -72px;
        bottom: -39px;
      }

      app-paragrafo {

        font-size: 1.25rem;
      }
    `,
  ];

  render() {
    return html`

      <section>
        <app-titulo
          ><h1>Barbearia <span>Vanguarda</span></h1>

          <app-logo></app-logo>
        </app-titulo>

        <app-quadro>
          <img src="slider-1.jpg" alt="imagem slider"/>
        </app-quadro>
      </section>

      <app-paragrafo
        >Obtenha um estilo impecável, do cabelo à barba.</app-paragrafo
      >
    `;
  }
}

customElements.define("hero-section", HeroSection);
