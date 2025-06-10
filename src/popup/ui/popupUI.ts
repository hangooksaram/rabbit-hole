import ChromeStorage from "../../chromeApi/storageData";
import { History } from "../../chromeApi/storageDataType";
import { initRabbitHole } from "../../rabbitHole/rabbitHole";
import {
  createNewRabbitHoleText,
  hiddenClass,
  kawaiAnimation,
  newRabbitHoleText,
  noSearchQueryText,
  recentSearchQueryText,
  scaleDownAnimation,
  slideInBottomAnimation,
  slideOutBottomAnimation,
  toastStyle,
} from "./constants";
import PopupElements from "./popupElements";
import { RabbitHoleHistoryItem } from "./rabbitHole/rabbitHoleHistoryItem";

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
      PopupElements.recentSearch.toggleClass(scaleDownAnimation);
      PopupElements.recentSearchLabel.setText(createNewRabbitHoleText);
      PopupElements.createRabbitHoleImage.toggleClass(kawaiAnimation);
    });

    PopupElements.recentSearchContainer.addEvent("mouseleave", () => {
      PopupElements.recentSearch.toggleClass(scaleDownAnimation);
      PopupElements.recentSearchLabel.setText(recentSearchQueryText);
      PopupElements.createRabbitHoleImage.toggleClass(kawaiAnimation);
    });
  }

  static initSetting() {
    PopupElements.settingOpenButton.addEvent("click", () => {
      PopupElements.settingContainer.toggleClass(hiddenClass);
      PopupElements.settingContainer.toggleClass(slideInBottomAnimation);
      PopupElements.settingContainer.toggleClass(slideOutBottomAnimation);
    });

    PopupElements.settingCloseButton.addEvent("click", () => {
      PopupElements.settingContainer.toggleClass(slideInBottomAnimation);
      PopupElements.settingContainer.toggleClass(slideOutBottomAnimation);
      PopupElements.settingContainer.toggleClass(hiddenClass);
    });
  }
}

export default PopupUI;
