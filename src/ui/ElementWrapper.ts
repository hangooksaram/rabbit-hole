export default class ElementWrapper<T extends HTMLElement> {
  constructor(public el: T) {}

  getValue(): string {
    if (
      this.el instanceof HTMLInputElement ||
      this.el instanceof HTMLTextAreaElement
    ) {
      return this.el.value;
    }
    return "";
  }

  addClass(value: string) {
    this.el.classList.add(value);
  }

  removeClass(value: string) {
    this.el.classList.remove(value);
  }

  toggleClass(value: string) {
    this.el.classList.toggle(value);
  }

  addEvent<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: (e: HTMLElementEventMap[K]) => void
  ) {
    this.el.addEventListener(type, listener as EventListener);
  }

  clearChildren() {
    this.el.innerHTML = "";
  }

  appendChild(child: HTMLElement) {
    this.el.appendChild(child);
  }
}
