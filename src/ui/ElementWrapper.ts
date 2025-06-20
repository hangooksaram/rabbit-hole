export default class ElementWrapper<T extends HTMLElement> {
  constructor(public el: T) {}

  setText(value: string) {
    this.el.innerHTML = value;
  }

  getText(): string {
    return this.el.textContent || "";
  }

  getValue(): string {
    if (
      this.el instanceof HTMLInputElement ||
      this.el instanceof HTMLTextAreaElement
    ) {
      return this.el.value;
    }
    return "";
  }

  setValue(value: string) {
    if (
      this.el instanceof HTMLInputElement ||
      this.el instanceof HTMLTextAreaElement
    ) {
      this.el.value = value;
    } else {
      throw new Error(
        "setValue is only applicable to input or textarea elements."
      );
    }
  }

  setStyle(property: string, value: string) {
    this.el.style.setProperty(property, value);
  }

  removeStyle(property: string) {
    this.el.style.removeProperty(property);
  }

  isPropertySet(property: string): boolean {
    return this.el.style.getPropertyValue(property) !== "";
  }

  addClass(value: string) {
    this.el.classList.add(value);
  }

  hasClass(value: string): boolean {
    return this.el.classList.contains(value);
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

  click() {
    this.el.click();
  }
}
