import { LitElement, html, css } from 'lit';


    render() {
        return html`
        <app-paragrafo>
         estilo, cuidado e excelencia em cada corte.
        </app-paragrafo>
        
        <section>
            <app-quadro>

            </app-quadro>

            <aside>
                <article>
                  <app-paragrafo>corte</app-paragrafo>
                  <app-paragrafo>Social, degradê, surfistinha, militar, razor part, undercut</app-paragrafo>  
                </article>

                <app-botao>Ver mais</app-botao>
            </aside>
        </section>
           
        <div>
            <app-bolinhas formato = "fila-preenchida"></app-bolinhas>
            <app-bolinhas formato = "fila-vazada"></app-bolinhas>
        </div>
    `;  
  } 

4}    
customElements.define('serviços-section', ServiçOsSection);
