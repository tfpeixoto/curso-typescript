export abstract class View<T>{
  protected elemento: HTMLInputElement

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = this.template(model);
  }
}