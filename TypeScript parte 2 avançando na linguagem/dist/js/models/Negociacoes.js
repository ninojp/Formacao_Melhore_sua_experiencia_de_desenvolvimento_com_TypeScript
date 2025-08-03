export default class Negociacoes {
    constructor() {
        this.negociacoes = []; //pode ser declarado dessa forma, genericType[].
    }
    // private negociacoes:Array<Negociacao> = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    ;
    // lista(): ReadonlyArray<Negociacao> {
    lista() {
        return this.negociacoes;
        // return [...this.negociacoes];//RETORNA uma cópia do array, para evitar que o array original seja modificado diretamente
        // return this.negociacoes.slice();//OUTRA FORMA de retornar uma cópia do array
    }
    ;
}
;
//============================================================
// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach(n => {
//     console.log(n.data, n.quantidade, n.valor, n.volume);
// });
