import { Path } from "../chromeApi/storageDataType";

const googleLogoImgPath = "/img/google-logo.png";
const naverLogoImgPath = "/img/naver-logo.svg";
const youtubeLogoImgPath = "/img/youtube-logo.png";
const defaultLogoImgPath = "/img/default-search-engine-logo.png";

export class RabbitHolePathItem {
  private element: HTMLLIElement = document.createElement("li");
  private searchPath: Path;

  constructor(path: Path) {
    this.searchPath = path;

    this.element.classList.add("button", "rabbit-hole-path-item");

    this.createRabbitHolePathItemLogoElement();
    this.createRabbitHoleInformationElement();
    this.addClickEventListener();
  }

  getElement() {
    return this.element;
  }

  private getRabbitHolePathIconPathConditional() {
    switch (true) {
      case this.searchPath.searchEngine?.toLowerCase().includes("google"):
        return googleLogoImgPath;
      case this.searchPath.searchEngine?.includes("네이버"):
        return naverLogoImgPath;
      case this.searchPath.searchEngine?.toLowerCase().includes("youtube"):
        return youtubeLogoImgPath;
      default:
        return defaultLogoImgPath;
    }
  }

  private createRabbitHoleSearchTimeElement() {
    const timeElement = document.createElement("span");
    timeElement.innerText = new Date(
      this.searchPath.visitTime!
    ).toLocaleString();
    return timeElement;
  }

  private createRabbitHolePathItemLogoElement() {
    const imgElement = document.createElement("img");
    const imgSrc = this.getRabbitHolePathIconPathConditional();

    imgElement.width = 20;
    imgElement.height = 20;
    imgElement.alt = "Search Engine Icon";

    imgElement.src = imgSrc;

    this.element.prepend(imgElement);
  }

  private createSearchQueryElement() {
    const searchQueryElement = document.createElement("div");
    searchQueryElement.innerText = this.searchPath.searchQuery!;
    return searchQueryElement;
  }

  private createRabbitHoleInformationElement() {
    const infoElement = document.createElement("div");
    const searchQueryElement = this.createSearchQueryElement();
    const timeElement = this.createRabbitHoleSearchTimeElement();

    infoElement.appendChild(searchQueryElement);
    infoElement.appendChild(timeElement);
    infoElement.classList.add("rabbit-hole-path-item-info");

    this.element.appendChild(infoElement);
  }

  private addClickEventListener() {
    this.element.addEventListener("click", () => {
      if (this.searchPath.searchUrl) {
        window.open(this.searchPath.searchUrl, "_blank");
      } else {
        console.warn("Search URL is not available for this path item.");
      }
    });
  }
}
