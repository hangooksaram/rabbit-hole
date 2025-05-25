import ChromeStorage from "../../chromeApi/storageData";
import { initRabbitHole } from "../../rabbitHole/rabbitHole";
import { toastStyle } from "./pop-up-constants";
import PopupElements from "./popupElements";

const noSearchQueryText = "검색 페이지에서 검색을 먼저 수행해주세요.";
const newRabbitHoleText = "새로운 Rabbit Hole이 생성되었습니다.";

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
    PopupElements.addStartButtonClickListener(async () => {
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
      PopupElements.addRecentSearchElementClass("flip-2-hor-top-2");
      PopupElements.setRecentSearchLabelElement("새로운 토끼굴 생성하기!");

      document
        .getElementById("createRabbitHoleImage")
        ?.classList.add("flip-2-hor-top-1");
    });

    PopupElements.addRecentSearchContainerMouseLeaveListener(() => {
      PopupElements.removeRecentSearchElementClass("flip-2-hor-top-2");
      PopupElements.setRecentSearchLabelElement("최근 검색어");
      document
        .getElementById("createRabbitHoleImage")
        ?.classList.remove("flip-2-hor-top-1");
    });
  }
}

export default PopupUI;
