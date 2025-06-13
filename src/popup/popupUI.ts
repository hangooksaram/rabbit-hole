import ChromeStorage from "../chromeApi/storageData";
import { History } from "../chromeApi/storageDataType";
import { initRabbitHole } from "../rabbitHole/rabbitHole";
import toast from "../ui/toast";
import {
  createNewRabbitHoleText,
  kawaiAnimation,
  newRabbitHoleText,
  noSearchQueryText,
  recentSearchQueryText,
  scaleDownAnimation,
} from "./constants";
import PopupElements from "./popupElements";
import RabbitHoleDepth from "./rabbitHole/depth";
import { RabbitHoleHistoryItem } from "./rabbitHole/rabbitHoleHistoryItem";

class PopupUI {
  static RabbitHoleDepth = RabbitHoleDepth;

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
      initRabbitHole(recentSearch?.searchQuery || "", async () => {
        toast(newRabbitHoleText);
        PopupUI.initRabbitHoleUI();
        PopupUI.setRabbitHoleDepthUI(0);

        await PopupUI.RabbitHoleDepth.setCurrentRabbitHoleDepthUI();
        await PopupUI.RabbitHoleDepth.setMaxRabbitHoleDepthUI();
        await PopupUI.RabbitHoleDepth.setDepthProgressUI();
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
}

export default PopupUI;
