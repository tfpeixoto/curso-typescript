export class mensagemView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
        return `
      <div class="mensagem">Mensagem</div>
    `;
    }
    update() {
    }
}
