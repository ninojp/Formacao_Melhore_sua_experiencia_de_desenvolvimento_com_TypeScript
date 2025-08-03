import Negociacoes from "../models/Negociacoes.js";
import View from "./View.js";

export default class NegociacoesView extends View<Negociacoes> {
    // private elemento: HTMLElement;
    // //-------------------------------------------------------------------
    // constructor(seletor:string) {
    //     this.elemento = document.querySelector(seletor) as HTMLElement;
    // };
    //===================================================================
    protected template(model:Negociacoes):string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
                        return `
                            <tr>
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>`;
                    }).join('')}
                </tbody>
            </table>`;
    };
    //------------------------------------------------
    private formatar(data:Date):string {
        return new Intl.DateTimeFormat().format(data);
    };
    //------------------------------------------------
    // update(model:string): void {
    //     const template = this.template(model);
    //     this.elemento.innerHTML = template;
    // };
};
