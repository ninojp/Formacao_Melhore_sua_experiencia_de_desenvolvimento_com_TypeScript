//uma classe abstrata não pode ser instanciada, mas pode ser estendida
export default class View {
    //-------------------------------------------------------------------
    //O ? operador é usado para indicar que o elemento pode ser nulo, e o TypeScript não irá lançar um erro se for nulo.
    //O as HTMLElement é uma type assertion que informa ao TypeScript que o elemento não é nulo e é do tipo HTMLElement.
    //O TypeScript não sabe que o querySelector retornará um HTMLElement, então usamos a type assertion para garantir isso.
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
    }
    ;
    //===================================================================
    update(model) {
        let template = this.template(model);
        //Devido a fragilidade do innerHTML, é necessário escapar o conteúdo para evitar XSS (Cross-Site Scripting).
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        ;
        this.elemento.innerHTML = template;
    }
    ;
}
;
