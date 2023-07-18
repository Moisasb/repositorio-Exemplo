import { LitElement, html, css } from "lit";

import { section } from "../styles/sections-style";

export class ServicosSection extends LitElement {
  static styles = [
    section,

    css`
      app-bolinhas {
        --cor-bolinhas: (--tom-3);

        width: 270px;

        height: 23px;
      }

      app-bolinhas:first-child {
        transform: rotate(180deg);
      }

      div {
        display: flex;

        flex-direction: column;

        align-items: center;

        gap: 10px;
      }

      span {
        color: var(--tom-3);

        font-weight: 600; /* SemiBold */
      }

      app-paragrafo:first-child {
        width: 270px;
      }

      section {
        display: flex;

        align-items: center;

        gap: 36px;

        align-self: stretch;
      }

      aside {
        display: flex;

        padding: 96px 0px 0px 0px;

        flex-direction: column;

        justify-content: space-between;

        align-items: center;

        align-self: stretch;
      }

      article {
        display: flex;

        flex-direction: column;

        justify-content: center;

        align-items: center;

        gap: 16px;
      }

      article app-paragrafo {
        font-weight: 700;

        color: var(--tom-3 #664e38);


        descricao {
           width: 6.75rem;
           font-size: 0.875rem ;

        }

        img {
       height:120% ;

       app-quadro {
       border-top-left-radius: 

       }

        }
      }
    `,
  ];

  render() {
    return html`
      <app-paragrafo>
        Estilo, cuidado e excelência em cada <span>corte.</span>
      </app-paragrafo>

      <section>
        <app-quadro>
            <img alt="imagens serviços 1" />
        </app-quadro>

        <aside>
          <article>
            <app-paragrafo>Corte</app-paragrafo>

            <app-paragrafo>
              Social, degradê, surfista, militar, razor part, undercut
            </app-paragrafo>
          </article>

          <app-botao>Ver Mais</app-botao>
        </aside>
      </section>

      <div>
        <app-bolinhas formato="fila-vazada"></app-bolinhas>

        <app-bolinhas formato="fila-preenchida"></app-bolinhas>
      </div>
    `;
  }
}

customElements.define("servicos-section", ServicosSection);
