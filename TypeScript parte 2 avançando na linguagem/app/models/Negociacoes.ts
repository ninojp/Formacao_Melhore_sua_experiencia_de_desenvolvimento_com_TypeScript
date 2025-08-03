import Negociacao from "./Negociacao.js";

export default class Negociacoes {
    private negociacoes:Negociacao[] = [];//pode ser declarado dessa forma, genericType[].
    // private negociacoes:Array<Negociacao> = [];

    public adiciona(negociacao:Negociacao) {
        this.negociacoes.push(negociacao);
    };
    // lista(): ReadonlyArray<Negociacao> {
    public lista(): readonly Negociacao[] { // ReadonlyArray<Negociacao> é o mesmo que readonly Negociacao[]
        return this.negociacoes;
        // return [...this.negociacoes];//RETORNA uma cópia do array, para evitar que o array original seja modificado diretamente
        // return this.negociacoes.slice();//OUTRA FORMA de retornar uma cópia do array
    };
};
//============================================================
// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach(n => {
//     console.log(n.data, n.quantidade, n.valor, n.volume);
// });
