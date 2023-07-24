import { LitElement, html, css } from 'lit';
import { section } from '../styles/sections-style';

export class UNidadesSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html``;
  }
}
customElements.define('unidades-section', UNidadesSection);
