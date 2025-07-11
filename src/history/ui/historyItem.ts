import { RabbitHole } from "../../chromeApi/storageDataType";

class HistoryItem {
  private element: HTMLLIElement = document.createElement("li");
  private history: RabbitHole;
  constructor(history: RabbitHole, index: number) {
    this.history = history;
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

  setHistoryItemUI(index: number) {
    this.element.classList.add("history-item");
    setTimeout(() => {
      this.element.classList.add("visible");
      this.element.style.width = `${this.getElementWidthByPercent()}%`;

      const searchQueryContainer = document.createElement("div");
      searchQueryContainer.classList.add("history-item-query-container");
      this.element.appendChild(searchQueryContainer);

      const searchQueryElement = document.createElement("div");
      searchQueryElement.innerText = this.history.query;
      searchQueryElement.classList.add("history-item-query");

      searchQueryContainer.appendChild(searchQueryElement);

      const percentElement = document.createElement("div");
      percentElement.innerText = `${this.history.percent}%`;
      percentElement.classList.add("history-item-percent");

      this.element.appendChild(searchQueryContainer);
      this.element.appendChild(percentElement);
    }, index * 300); // 300ms 간격으로 순차 등장
  }
}

export default HistoryItem;
