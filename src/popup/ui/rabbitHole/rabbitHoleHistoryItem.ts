import { History } from "../../../chromeApi/storageDataType";

const googleLogoImgPath = "/google-logo.png";
const naverLogoImgPath = "/naver-logo.svg";
const youtubeLogoImgPath = "/youtube-logo.jpeg";
const defaultLogoImgPath = "/default-search-engine-logo.png";

export class RabbitHoleHistoryItem {
  private element: HTMLLIElement = document.createElement("li");
  private searchHistory: History;

  constructor(history: History) {
    this.searchHistory = history;

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

  createRabbitHoleSearchTimeElement() {
    const timeElement = document.createElement("span");
    timeElement.innerText = new Date(
      this.searchHistory.visitTime!
    ).toLocaleString();
    return timeElement;
  }

  createRabbitHoleHistoryItemLogoElement() {
    const imgElement = document.createElement("img");
    const imgSrc = this.getRabbitHoleHistoryIconPath();

    imgElement.width = 20;
    imgElement.height = 20;
    imgElement.alt = "Search Engine Icon";

    imgElement.src = imgSrc;

    return imgElement;
  }

  createSearchQueryElement() {
    const searchQueryElement = document.createElement("div");
    searchQueryElement.innerText = this.searchHistory.searchQuery!;
    return searchQueryElement;
  }

  createRabbitHoleInformationelement() {
    const infoElement = document.createElement("div");
    const searchQueryElement = this.createSearchQueryElement();
    const timeElement = this.createRabbitHoleSearchTimeElement();

    infoElement.appendChild(searchQueryElement);
    infoElement.appendChild(timeElement);
    infoElement.classList.add("rabbit-hole-history-item-info");

    return infoElement;
  }

  setRabbitHoleHistoryItemUI() {
    const imgElement = this.createRabbitHoleHistoryItemLogoElement();
    const infoElement = this.createRabbitHoleInformationelement();

    this.element.prepend(imgElement);
    this.element.appendChild(infoElement);

    this.element.classList.add("button", "rabbit-hole-history-item");
  }
}
