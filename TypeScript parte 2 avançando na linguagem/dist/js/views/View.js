//uma classe abstrata não pode ser instanciada, mas pode ser estendida
export default class View {
    //-------------------------------------------------------------------
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    ;
    //===================================================================
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    ;
}
;
