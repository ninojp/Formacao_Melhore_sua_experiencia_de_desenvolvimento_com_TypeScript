export default class Negociacao {
    constructor(_data, //Colocamos o modificador 'private' para que a propriedade seja acessível apenas dentro da classe.
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ;
    //Para resolver a Brecha, vamos clonar, Date() e expor apenas a cópia.
    get data() {
        return new Date(this._data.getTime()); //Retorna uma cópia da data, para evitar que a data original seja modificada.
    }
    ;
    get volume() {
        return this.quantidade * this.valor;
    }
    ;
}
;
//===========================================================================================================
//Exemplo de como pode ser feito, com o modificador READONLY
class Negociacao2 {
    //Como vimos temos uma brecha de segurança, pois Date() é um objeto mutável. 
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ;
    get volume() {
        return this.quantidade * this.valor;
    }
    ;
}
;
//===========================================================================================================
class Negociacao1 {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // };
    //Faz a MESMA coisa q o código acima, mas simplificado.
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    ;
    get data() {
        return this._data;
    }
    ;
    get quantidade() {
        return this._quantidade;
    }
    ;
    get valor() {
        return this._valor;
    }
    ;
    get volume() {
        return this.quantidade * this.valor;
    }
    ;
}
;
