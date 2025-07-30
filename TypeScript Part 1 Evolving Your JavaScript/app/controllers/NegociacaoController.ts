import Negociacao from "../models/Negociacao.js";

export default class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        // this.inputQuantidade = document.getElementById('quantidade');
        //ERRO! O getElementById retorna uma REFERÊNCIA ao primeiro OBJETO com o id
    };
    adiciona():void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    };
    criaNegociacao():Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    };
    limpaFormulario():void {
        // const form = document.querySelector('.form') as HTMLFormElement | null;// Type assertion para garantir que form não é null
        // form?.reset();//ERRO! O reset() não funciona com o querySelector
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    };
};
