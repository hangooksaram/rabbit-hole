import { RabbitHole } from "../../chromeApi/storageDataType";

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

  getElementWidthByPercent() {
    if (this.history.percent < 95) {
      return this.history.percent + 5;
    }
    return 95;
  }

  setHistoryItemUI() {
    this.element.classList.add("history-item");
    this.element.style.width = `${this.getElementWidthByPercent()}%`;

    const searchQueryElement = document.createElement("div");
    searchQueryElement.innerText = this.history.query;
    searchQueryElement.classList.add("history-item-query");

    const percentElement = document.createElement("div");
    percentElement.innerText = `${this.history.percent}%`;
    percentElement.classList.add("history-item-percent");

    this.element.appendChild(searchQueryElement);
    this.element.appendChild(percentElement);
  }
}

export default HistoryItem;
