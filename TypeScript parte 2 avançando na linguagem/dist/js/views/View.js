export default class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`O seletor ${seletor} não foi encontrado no DOM.`);
        }
        ;
        if (escapar) {
            this.escapar = escapar;
        }
        ;
    }
    ;
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }
        ;
        this.elemento.innerHTML = template;
    }
    ;
}
;
