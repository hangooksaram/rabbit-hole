import ChromeStorage from "../../chromeApi/storageData";
import { initRabbitHole } from "../../rabbitHole/rabbitHole";
import { toastStyle } from "./pop-up-constants";
import PopupElements from "./popupElements";

const noSearchQueryText = "검색 페이지에서 검색을 먼저 수행해주세요.";
const newRabbitHoleText = "새로운 Rabbit Hole이 생성되었습니다.";
const scaleDownAnimation = "scale-down-center";
const kawaiAnimation = "jello-horizontal";

class PopupUI {
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

  static initRabbitHoleOnClickStartButton() {
    PopupElements.addCreateRabbitHoleImageEventListener(async () => {
      const recentSearch = await ChromeStorage.get("recentSearch");
      initRabbitHole(recentSearch?.searchQuery || "", () => {
        PopupUI.toastNewRabbitHole();
        PopupUI.initRabbitHoleUI();
        PopupUI.setRabbitHoleDepthUI(0);
      });
    });
  }

  static toggleRecentSearchLabel() {
    PopupElements.addRecentSearchContainerMouseEnterListener(() => {
      PopupElements.addRecentSearchElementClass(scaleDownAnimation);
      PopupElements.setRecentSearchLabelElement("새로운 토끼굴 생성하기!");
      PopupElements.addCreateRabbitHoleImageClass(kawaiAnimation);
    });

    PopupElements.addRecentSearchContainerMouseLeaveListener(() => {
      PopupElements.removeRecentSearchElementClass(scaleDownAnimation);
      PopupElements.setRecentSearchLabelElement("최근 검색어");
      PopupElements.removeCreateRabbitHoleImageClass(kawaiAnimation);
    });
  }
}

export default PopupUI;
