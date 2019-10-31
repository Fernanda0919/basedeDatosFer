
customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.innerText = "Copyright © 2019 Torres Hernandez Maria Fernanda.";
  }
}, { extends: "footer" });
