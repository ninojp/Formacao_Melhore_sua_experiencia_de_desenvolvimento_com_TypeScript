import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import Negociacao from "../models/Negociacao.js";
import Negociacoes from "../models/Negociacoes.js";
import MensagemView from "../views/MensagemView.js";
import NegociacoesView from "../views/NegociacoesView.js";

export default class NegociacaoController {
    // Podemos declarar o inputData com | null para indicar que ele pode ser nulo. 
    // private inputData: HTMLInputElement | null;
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private MensagemView = new MensagemView('#mensagemView', false);
    //-----------------------------------------------------------------
    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        //Ou usar "as HTMLInputElement" é uma type assertion que informa ao TypeScript que o input é do tipo HTMLInputElement e não é nulo.
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        //Ou usar <HTMLInputElement> é uma type assertion, usado em JSX, que informa ao TypeScript que o input é do tipo HTMLInputElement e não é nulo.
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
        // this.inputQuantidade = document.getElementById('quantidade');//ERRO! O getElementById retorna uma REFERÊNCIA ao primeiro OBJETO com o id
        this.negociacoesView.update(this.negociacoes);
    };
    //======================================================================
    public adiciona():void {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.MensagemView.update('Apenas negociações em dias úteis são aceitas!');
            return;
        };
        this.negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this.atualizaView();
    };
    //-------------------------------------------------
    private ehDiaUtil(date: Date):boolean {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
    }
    //----------------------------------------------------------------
    // private criaNegociacao():Negociacao {
    //     const exp = /-/g;
    //     const date = new Date(this.inputData.value.replace(exp, ','));
    //     const quantidade = parseInt(this.inputQuantidade.value);
    //     const valor = parseFloat(this.inputValor.value);
    //     return new Negociacao(date, quantidade, valor);
    // };
    //-------------------------------------------------
    private limpaFormulario():void {
        //O as HTMLFormElement é uma type assertion que informa ao TypeScript que o form não é nulo e é do tipo HTMLFormElement.
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
        // const form = document.querySelector('.form') as HTMLFormElement | null;//FUNCIONA, Type assertion para garantir que form não é null
        // form?.reset();//ERRO! O reset() não funciona com o querySelector
    };
    //-------------------------------------------------
    private atualizaView():void {
        this.negociacoesView.update(this.negociacoes);
        this.MensagemView.update('Negociação adicionada com sucesso!');
    }
};
