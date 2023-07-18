import { LitElement, html, css } from "lit";
import { section } from "../styles/sections-style";

export class ABarbeariaSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        justify-content: space-between;
        align-items: flex-start;
      }

      article {
        display: flex;
        padding: 8px 12px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        background: var(--tom1, #ead8c7);

        border: 3px solid;
        border-image-source: linear-gradient(
          42deg,
          rgba(102, 78, 56, 0) 50%,
          rgba(102, 78, 56, 1) 100%
        );
        border-image-slice: 1;

        border-left: 0;
        border-left: 0;
      }

      app-paragrafo {
        width: 270px;

        color: var(--cor-secundaria, #665e57);
        text-align: justify;
        font-family: var(--fonte-corpo);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: -1.28px;

        app-quadro {
          width: 335px;
          height: 335px;
          botfer-radius: 100%

        app-bolinhas {
            display: flex;
            width: 300px;
            height: 300px;
            align-items: center;

            position: absolute;
            left: -140px;
            bottom: 3px;
            z-index: -20
          }
        }
      }
    `,
  ];

  render() {
    return html`
      <app-titulo>A Barbearia</app-titulo>
      <app-quadro>
       <img src= "a-barbearia.jpg" alt='imagem'/>
      </app-quadro>
      <app-bolinhas></app-bolinhas>
      <article>
        <app-paragrafo>
          Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se encontram
          para proporcionar cortes de cabelo e barbas impecáveis. Com uma equipe
          de barbeiros especializados, combinamos técnicas tradicionais com as
          últimas tendências, garantindo um atendimento personalizado em um
          ambiente acolhedor
        </app-paragrafo>
        <app-botao>leia mais</app-botao>
      </article>
    `;
  }
}
customElements.define("a-barbearia-section", ABarbeariaSection);
