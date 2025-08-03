import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import MensagemView from "../views/MensagemView.js";
import NegociacoesView from "../views/NegociacoesView.js";
export default class NegociacaoController {
    //-----------------------------------------------------------------
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.MensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        // this.inputQuantidade = document.getElementById('quantidade');//ERRO! O getElementById retorna uma REFERÊNCIA ao primeiro OBJETO com o id
        this.negociacoesView.update(this.negociacoes);
    }
    ;
    //==============================================
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        // this.negociacoes.lista().pop();//REGRAS de modelo de negócio:Não deveria ser possivel deletar itens.
        // negociacao.data.setDate(12);//Brecha! A data original foi modificada, pois Date() é um objeto mutável.
        this.negociacoesView.update(this.negociacoes);
        this.MensagemView.update('Negociação adicionada com sucesso!');
        this.limpaFormulario();
    }
    ;
    //-------------------------------------------------
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    ;
    //-------------------------------------------------
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
