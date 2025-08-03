import View from "./View.js";

export default class MensagemView extends View<string> {
    // private elemento: HTMLElement;
    // //----------------------------
    // constructor(seletor: string) {
    //     this.elemento = document.querySelector(seletor) as HTMLElement;
    // };
    //===================================================================
    protected template(model:string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    };
    //--------------------------------------------------
    // update(model:Negociacoes):void {
    //     const template = this.template(model);
    //     this.elemento.innerHTML = template;
    // };
};
