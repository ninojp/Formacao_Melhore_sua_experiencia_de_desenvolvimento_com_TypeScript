'use strict';
import NegociacaoController from "./controllers/NegociacaoController.js";
import NegociacoesView from "./views/NegociacoesView.js";
// import Negociacao from "./models/Negociacao.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
// controller.adiciona();
form?.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
//============================================================

// const negociacoesView = new NegociacoesView;
// const template = negociacoesView.template();
// console.log(template);

//============================================================

// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao);
// negociacao.quantidade = 10000;
// console.log(negociacao.data);
// console.log(negociacao.volume);
// negociacao.data = new Date();//Erro, campo privado
