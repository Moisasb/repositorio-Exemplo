import { LitElement, html, css } from "lit";
import { section } from "../styles/sections-style";

export class ContatoSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        justify-content: space-between;
        gap: 0px;
      }

      img {
        width: 100%;
        height: 100%;
      }

      app-botao,
      div {
        width: 100%;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .whatsapp {
          --button-background: color-mix(in srgb, white 20%, #128c7e);
          --color: color-mix(in srgb, white 40%, var(--tom-1));
        }
      }
    `,
  ];

  render() {
    return html`
        <app-titulo>Entre em contato conosco</app-titulo>

        <app-quadro>
           <img src="thumb-contato.png" alt=" thumnail do video de contato"/>
        </app-quadro>
        
        <div>
         <app-botao
         ><svg xmlns="http://www.w3.org/2000/svg" 
         width="24" 
         height="24" 
         viewBox="0 0 24 24" 
         fill="none">
         <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#664E38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M22 6L12 13L2 6" stroke="#664E38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg></feather-icon> Nos envie um email</app-botao>
         

        <app-botao class="whatsapp"><svg 
         xmlns="http://www.w3.org/2000/svg" 
         width="24" 
         height="24" 
         viewBox="0 0 24 24" 
         fill="current color">
         <path d="M19.3547 4.55156C17.3906 2.58281 14.775 1.5 11.9953 1.5C6.25781 1.5 1.58906 6.16875 1.58906 11.9062C1.58906 13.7391 2.06719 15.5297 2.97656 17.1094L1.5 22.5L7.01719 21.0516C8.53594 21.8813 10.2469 22.3172 11.9906 22.3172H11.9953C17.7281 22.3172 22.5 17.6484 22.5 11.9109C22.5 9.13125 21.3187 6.52031 19.3547 4.55156ZM11.9953 20.5641C10.4391 20.5641 8.91562 20.1469 7.58906 19.3594L7.275 19.1719L4.00313 20.0297L4.875 16.8375L4.66875 16.5094C3.80156 15.1313 3.34688 13.5422 3.34688 11.9062C3.34688 7.13906 7.22812 3.25781 12 3.25781C14.3109 3.25781 16.4812 4.15781 18.1125 5.79375C19.7437 7.42969 20.7469 9.6 20.7422 11.9109C20.7422 16.6828 16.7625 20.5641 11.9953 20.5641ZM16.7391 14.0859C16.4813 13.9547 15.2016 13.3266 14.9625 13.2422C14.7234 13.1531 14.55 13.1109 14.3766 13.3734C14.2031 13.6359 13.7063 14.2172 13.5516 14.3953C13.4016 14.5688 13.2469 14.5922 12.9891 14.4609C11.4609 13.6969 10.4578 13.0969 9.45 11.3672C9.18281 10.9078 9.71719 10.9406 10.2141 9.94687C10.2984 9.77344 10.2562 9.62344 10.1906 9.49219C10.125 9.36094 9.60469 8.08125 9.38906 7.56094C9.17813 7.05469 8.9625 7.125 8.80313 7.11563C8.65313 7.10625 8.47969 7.10625 8.30625 7.10625C8.13281 7.10625 7.85156 7.17188 7.6125 7.42969C7.37344 7.69219 6.70312 8.32031 6.70312 9.6C6.70312 10.8797 7.63594 12.1172 7.7625 12.2906C7.89375 12.4641 9.59531 15.0891 12.2062 16.2188C13.8562 16.9312 14.5031 16.9922 15.3281 16.8703C15.8297 16.7953 16.8656 16.2422 17.0812 15.6328C17.2969 15.0234 17.2969 14.5031 17.2313 14.3953C17.1703 14.2781 16.9969 14.2125 16.7391 14.0859Z" fill="white"/>
         </svg>Fale Conosco</app-botao>
         </div>
        
        `;
  }
}
customElements.define("contato-section", ContatoSection);
