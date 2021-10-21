import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { View } from "./views/view.js";

const controler = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  controler.adiciona();
});