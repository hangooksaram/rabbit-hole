import { History } from "../../../chromeApi/storageDataType";

const googleLogoImgPath = "/google-logo.png";
const naverLogoImgPath = "/naver-logo.svg";
const youtubeLogoImgPath = "/youtube-logo.jpeg";
const defaultLogoImgPath = "/default-search-engine-logo.png";

export class RabbitHoleHistoryItem {
  private element: HTMLLIElement = document.createElement("li");
  private imageElement: HTMLImageElement = document.createElement("img");
  private searchHistory: History;

  constructor(history: History) {
    this.searchHistory = history;

    this.setRabbitHoleHistoryItemLogoUI();
    this.setRabbitHoleHistoryItemUI();
  }

  getRabbitHoleHistoryIconPath() {
    switch (true) {
      case this.searchHistory.searchEngine?.toLowerCase().includes("google"):
        return googleLogoImgPath;
      case this.searchHistory.searchEngine?.includes("네이버"):
        return naverLogoImgPath;
      case this.searchHistory.searchEngine?.toLowerCase().includes("youtube"):
        return youtubeLogoImgPath;
      default:
        return defaultLogoImgPath;
    }
  }

  getElement() {
    return this.element;
  }

  setSearchQueryText() {
    this.element.innerText = this.searchHistory.searchQuery!;
  }

  setRabbitHoleHistoryItemLogoUI() {
    const imgSrc = this.getRabbitHoleHistoryIconPath();

    this.imageElement.width = 20;
    this.imageElement.height = 20;
    this.imageElement.alt = "Search Engine Icon";

    this.imageElement.src = imgSrc;
  }

  setRabbitHoleHistoryItemUI() {
    this.setSearchQueryText();
    this.element.prepend(this.imageElement);
    this.element.classList.add("button", "rabbit-hole-history-item");
  }
}
