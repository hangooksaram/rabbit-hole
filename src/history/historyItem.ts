import { RabbitHole } from "../chromeApi/storageDataType";

class HistoryItem {
  private element: HTMLLIElement = document.createElement("li");
  private history: RabbitHole;
  constructor(history: RabbitHole) {
    this.history = history;

    this.setHistoryItemUI();
  }

  getElement() {
    return this.element;
  }

  setHistoryItemUI() {
    this.element.classList.add("history-item");

    const searchQueryElement = document.createElement("div");
    searchQueryElement.innerText = this.history.query;
    searchQueryElement.classList.add("history-item-query");

    const percentElement = document.createElement("div");
    percentElement.innerText = `${this.history.percent}%`;
    percentElement.classList.add("history-item-percent");

    const containerElement = document.createElement("div");
    containerElement.style.display = "flex";
    containerElement.style.justifyContent = "space-between";
    containerElement.appendChild(searchQueryElement);
    containerElement.appendChild(percentElement);

    this.element.appendChild(containerElement);
  }
}

export default HistoryItem;
