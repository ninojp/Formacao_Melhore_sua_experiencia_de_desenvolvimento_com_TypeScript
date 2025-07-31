export default class Negociacoes {
    constructor() {
        // private negociacoes:Negociacao[] = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    ;
    lista() {
        return [...this.negociacoes]; //RETORNA uma cópia do array, para evitar que o array original seja modificado diretamente
        // return this.negociacoes.slice();//OUTRA FORMA de retornar uma cópia do array
        // return this.negociacoes;
        ;
    }
}
;
// const negociacoes = new Negociacoes();
// negociacoes.lista().forEach(n => {
//     console.log(n.data, n.quantidade, n.valor, n.volume);
// });
