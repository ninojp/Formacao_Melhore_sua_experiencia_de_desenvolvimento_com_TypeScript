export default class Negociacao {
    constructor(
        private _data: Date, // Como vimos temos uma brecha de segurança, pois Date() é um objeto mutável. 
        public readonly quantidade: number,
        public readonly valor: number) { };
    //Para resolver a Brecha, vamos clonar, Date() e expor apenas a cópia.
    get data(): Date {
        return new Date(this._data.getTime());//Retorna uma cópia da data, para evitar que a data original seja modificada.
    };
    get volume(): number {
        return this.quantidade * this.valor;
    };
};
//===========================================================================================================

//Exemplo de como pode ser feito, com o modificador READONLY
class Negociacao2 {
    constructor(
        readonly data: Date,//Como vimos temos uma brecha de segurança, pois Date() é um objeto mutável. 
        readonly quantidade: number,
        readonly valor: number) { };

        get volume(): number {
            return this.quantidade * this.valor;
        };
        
    };
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
    constructor(private _data: Date, private _quantidade: number, private _valor: number) { };

    get data(): Date {
        return this._data;
    };
    get quantidade(): number {
        return this._quantidade;
    };
    get valor(): number {
        return this._valor;
    };
    get volume(): number {
        return this.quantidade * this.valor;
    };
};

