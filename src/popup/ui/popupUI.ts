import ChromeStorage from "../../chromeApi/storageData";
import { History } from "../../chromeApi/storageDataType";
import { initRabbitHole } from "../../rabbitHole/rabbitHole";
import { toastStyle } from "./pop-up-constants";
import PopupElements from "./popupElements";
import { RabbitHoleHistoryItem } from "./rabbitHole/rabbitHoleHistoryItem";

const noSearchQueryText = "감지된 검색이 없습니다.";
const newRabbitHoleText = "새로운 Rabbit Hole이 생성되었습니다.";
const scaleDownAnimation = "scale-down-center";
const kawaiAnimation = "jello-horizontal";

class PopupUI {
  static setRecentSearchQueryUI(query: string | undefined) {
    PopupElements.recentSearch.setText(query || noSearchQueryText);
  }

  static initRabbitHoleUI() {
    PopupElements.rabbitHoleHistory.clearChildren();
  }

  static setRabbitHoleHistoryItemUI(history: History) {
    const newRabbitHoleHistoryItem = new RabbitHoleHistoryItem(
      history
    ).getElement();

    PopupElements.rabbitHoleHistory.appendChild(newRabbitHoleHistoryItem);
  }

  static setRabbitHoleDepthUI(holeDepth: number | undefined) {
    PopupElements.rabbitHoleDepth.setText(`토끼굴 깊이: ${holeDepth || 0}`);
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
    PopupElements.createRabbitHoleImage.addEvent("click", async () => {
      const recentSearch = await ChromeStorage.get("recentSearch");
      initRabbitHole(recentSearch?.searchQuery || "", () => {
        PopupUI.toastNewRabbitHole();
        PopupUI.initRabbitHoleUI();
        PopupUI.setRabbitHoleDepthUI(0);
      });
    });
  }

  static toggleRecentSearchLabel() {
    PopupElements.recentSearchContainer.addEvent("mouseenter", () => {
      PopupElements.recentSearch.addClass(scaleDownAnimation);
      PopupElements.recentSearchLabel.setText("새로운 토끼굴 생성하기!");
      PopupElements.createRabbitHoleImage.addClass(kawaiAnimation);
    });

    PopupElements.recentSearchContainer.addEvent("mouseleave", () => {
      PopupElements.recentSearch.removeClass(scaleDownAnimation);
      PopupElements.recentSearchLabel.setText("최근 검색어");
      PopupElements.createRabbitHoleImage.removeClass(kawaiAnimation);
    });
  }
}

export default PopupUI;
