import { Path } from "../../chromeApi/storageDataType";

const googleLogoImgPath = "/img/google-logo.png";
const naverLogoImgPath = "/img/naver-logo.svg";
const youtubeLogoImgPath = "/img/youtube-logo.png";
const defaultLogoImgPath = "/img/default-search-engine-logo.png";

export class RabbitHolePathItem {
  private element: HTMLLIElement = document.createElement("li");
  private searchPath: Path;

  constructor(path: Path) {
    this.searchPath = path;

    this.setRabbitHolePathItemUI();
    this.addClickEventListener();
  }

  getRabbitHolePathIconPath() {
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

  getElement() {
    return this.element;
  }

  createRabbitHoleSearchTimeElement() {
    const timeElement = document.createElement("span");
    timeElement.innerText = new Date(
      this.searchPath.visitTime!
    ).toLocaleString();
    return timeElement;
  }

  createRabbitHolePathItemLogoElement() {
    const imgElement = document.createElement("img");
    const imgSrc = this.getRabbitHolePathIconPath();

    imgElement.width = 20;
    imgElement.height = 20;
    imgElement.alt = "Search Engine Icon";

    imgElement.src = imgSrc;

    return imgElement;
  }

  createSearchQueryElement() {
    const searchQueryElement = document.createElement("div");
    searchQueryElement.innerText = this.searchPath.searchQuery!;
    return searchQueryElement;
  }

  createRabbitHoleInformationelement() {
    const infoElement = document.createElement("div");
    const searchQueryElement = this.createSearchQueryElement();
    const timeElement = this.createRabbitHoleSearchTimeElement();

    infoElement.appendChild(searchQueryElement);
    infoElement.appendChild(timeElement);
    infoElement.classList.add("rabbit-hole-path-item-info");

    return infoElement;
  }

  addClickEventListener() {
    this.element.addEventListener("click", () => {
      if (this.searchPath.searchUrl) {
        window.open(this.searchPath.searchUrl, "_blank");
      } else {
        console.warn("Search URL is not available for this path item.");
      }
    });
  }

  setRabbitHolePathItemUI() {
    const imgElement = this.createRabbitHolePathItemLogoElement();
    const infoElement = this.createRabbitHoleInformationelement();

    this.element.prepend(imgElement);
    this.element.appendChild(infoElement);

    this.element.classList.add("button", "rabbit-hole-path-item");
  }
}
