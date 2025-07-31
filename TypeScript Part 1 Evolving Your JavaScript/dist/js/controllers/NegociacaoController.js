import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        // this.inputQuantidade = document.getElementById('quantidade');//ERRO! O getElementById retorna uma REFERÊNCIA ao primeiro OBJETO com o id
    }
    ;
    ;
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.lista().pop(); //REGRAS de modelo de negócio:Não deveria ser possivel deletar itens.
        console.log(this.negociacoes.lista());
        this.limpaFormulario();
    }
    ;
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    ;
    limpaFormulario() {
        // const form = document.querySelector('.form') as HTMLFormElement | null;//FUNCIONA, Type assertion para garantir que form não é null
        // form?.reset();//ERRO! O reset() não funciona com o querySelector
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    ;
}
;
