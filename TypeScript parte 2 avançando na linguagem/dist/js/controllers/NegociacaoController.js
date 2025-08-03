import { DiasDaSemana } from "../enums/DiasDaSemana.js";
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
    //======================================================================
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.MensagemView.update('Apenas negociações em dias úteis são aceitas!');
            return;
        }
        ;
        this.negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this.atualizaView();
    }
    ;
    //-------------------------------------------------
    ehDiaUtil(date) {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
    }
    //----------------------------------------------------------------
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
    //-------------------------------------------------
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.MensagemView.update('Negociação adicionada com sucesso!');
    }
}
;
