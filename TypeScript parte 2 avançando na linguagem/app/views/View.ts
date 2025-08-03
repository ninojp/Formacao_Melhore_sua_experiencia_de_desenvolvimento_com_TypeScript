//uma classe abstrata não pode ser instanciada, mas pode ser estendida
export default abstract class View<T> {
    //O modificador de acesso 'protected' permite que a propriedade seja acessada por classes filhas, mas não por instâncias da classe base.
    protected elemento: HTMLElement;
    //-------------------------------------------------------------------
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor) as HTMLElement;
    };
    //===================================================================
    public update(model:T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    };
    //----------------------------------------
    protected abstract template(model:T): string;
};
