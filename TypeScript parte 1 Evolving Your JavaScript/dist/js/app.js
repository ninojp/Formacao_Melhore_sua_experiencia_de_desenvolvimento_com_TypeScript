'use strict';
import NegociacaoController from "./controllers/NegociacaoController.js";
// import Negociacao from "./models/Negociacao.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
// controller.adiciona();
form === null || form === void 0 ? void 0 : form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
