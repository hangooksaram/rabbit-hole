import { History } from "../../chromeApi/chromeLocalData";
import PopupElements from "./popupElements";

const noSearchQueryText = "검색 페이지에서 검색을 먼저 수행해주세요.";
const newRabbitHoleText = "새로운 Rabbit Hole이 저장되었습니다.";

class PopupUI {
  private popupElements!: PopupElements;
  constructor() {
    this.init();
  }

  private init() {
    this.popupElements = new PopupElements();
  }

  setRecentSearchQueryUI(query: string | undefined) {
    this.popupElements.setRecentSearchElement(query || noSearchQueryText);
  }

  setRabbitHoleHistoryItemUI(searchQuery: string | undefined) {
    const historyElement = document.createElement("li");
    historyElement.innerHTML = searchQuery!;
    this.popupElements.appendRabbitHoleHistoryElement(historyElement);
  }

  setRabbitHoleDepthUI(holeDepth: number | undefined) {
    this.popupElements.setRabbitHoleDepthElement(holeDepth || 0);
  }

  toastNewRabbitHole() {
    this.popupElements.setStatusTextElement(newRabbitHoleText);

    setTimeout(() => {
      this.popupElements.setStatusTextElement("");
    }, 1000);
  }

  addStartButtonClickListener(callback: () => void) {
    this.popupElements.addStartButtonClickListener(callback);
  }
}

export default PopupUI;
