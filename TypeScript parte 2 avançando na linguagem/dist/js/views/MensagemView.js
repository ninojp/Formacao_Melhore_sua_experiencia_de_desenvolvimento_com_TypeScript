import View from "./View.js";
export default class MensagemView extends View {
    // private elemento: HTMLElement;
    // //----------------------------
    // constructor(seletor: string) {
    //     this.elemento = document.querySelector(seletor) as HTMLElement;
    // };
    //===================================================================
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    ;
}
;
