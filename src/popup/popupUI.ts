import ChromeStorage from "../chromeApi/storageData";
import { History } from "../chromeApi/storageDataType";
import { initRabbitHole } from "../rabbitHole/rabbitHole";
import toast from "../ui/toast";
import {
  createNewRabbitHoleText,
  fadeInAnimation,
  fadeOutAnimation,
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

  static initRabbitHoleOnClickStartButton() {
    PopupElements.createRabbitHoleImage.addEvent("click", async () => {
      const recentSearch = await ChromeStorage.get("recentSearch");
      initRabbitHole(recentSearch?.searchQuery || "", () => {
        toast(newRabbitHoleText);
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

  static async setCurrentRabbitHoleDepthUI() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");
    PopupElements.currentRabbitHoleDepth.setText(
      rabbitHole.holeDepth.toString()
    );
  }
  static async setMaxRabbitHoleDepthUI() {
    const setting = await ChromeStorage.get("setting");
    PopupElements.maxRabbitHoleDepth.setText(setting.maxHoleDepth.toString());
  }
}

export default PopupUI;
