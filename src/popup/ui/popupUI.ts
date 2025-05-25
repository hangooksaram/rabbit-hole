import { toastStyle } from "./pop-up-constants";
import PopupElements from "./popupElements";

const noSearchQueryText = "검색 페이지에서 검색을 먼저 수행해주세요.";
const newRabbitHoleText = "새로운 Rabbit Hole이 생성되었습니다.";

class PopupUI {
  constructor() {
    this.init();
  }

  private init() {}

  static setRecentSearchQueryUI(query: string | undefined) {
    PopupElements.setRecentSearchElement(query || noSearchQueryText);
  }

  static setRabbitHoleHistoryItemUI(searchQuery: string | undefined) {
    const historyElement = document.createElement("li");
    historyElement.innerHTML = searchQuery!;
    PopupElements.appendRabbitHoleHistoryElement(historyElement);
  }

  static initRabbitHoleUI() {
    PopupElements.removeRabbitHoleHistoryElement();
  }

  static setRabbitHoleDepthUI(holeDepth: number | undefined) {
    PopupElements.setRabbitHoleDepthElement(holeDepth || 0);
  }

  static toastNewRabbitHole() {
    const toastElement = document.createElement("div");
    toastElement.textContent = newRabbitHoleText;
    Object.assign(toastElement.style, toastStyle);

    document.body.appendChild(toastElement);

    toastElement.style.opacity = "1";

    setTimeout(() => {
      document.body.removeChild(toastElement);
    }, 1500);
  }

  static addStartButtonClickListener(callback: () => void) {
    PopupElements.addStartButtonClickListener(callback);
  }

  static onMouseOverRecentSearch(callback: () => void) {
    PopupElements.setRecentSearchElement("새로운 토끼굴 생성!");
  }
  static onMouseOutRecentSearch(callback: () => void) {}
}

export default PopupUI;
