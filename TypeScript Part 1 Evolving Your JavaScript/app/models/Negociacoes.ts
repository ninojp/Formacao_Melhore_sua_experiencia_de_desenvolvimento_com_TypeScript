import Negociacao from "./Negociacao.js";

export default class Negociacoes {
    // private negociacoes:Negociacao[] = [];
    private negociacoes:Array<Negociacao> = [];

    adiciona(negociacao:Negociacao) {
        this.negociacoes.push(negociacao);
    };
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
        // return [...this.negociacoes];//RETORNA uma cópia do array, para evitar que o array original seja modificado diretamente
        // return this.negociacoes.slice();//OUTRA FORMA de retornar uma cópia do array
    };
};

// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach(n => {
//     console.log(n.data, n.quantidade, n.valor, n.volume);
// });
