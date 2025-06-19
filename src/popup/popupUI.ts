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
    PopupElements.recentSearchText.setText(query || noSearchQueryText);
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

  static initRabbitHoleOnClickStartButton() {
    PopupElements.createRabbitHoleImage.addEvent("click", async () => {
      const recentSearch = await ChromeStorage.get("recentSearch");
      initRabbitHole(recentSearch?.searchQuery || "", async () => {
        const rabbitHole = await ChromeStorage.get("rabbitHole");
        toast(newRabbitHoleText);

        await PopupUI.setRabbitHoleDepthUI();

        PopupUI.setCurrentRabbitHoleGoalValueUI(rabbitHole.query);

        PopupUI.initRabbitHoleUI();
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

  static async setRabbitHoleDepthUI() {
    await PopupUI.RabbitHoleDepth.setMaxRabbitHoleDepthUI();
    await PopupUI.RabbitHoleDepth.setCurrentRabbitHoleDepthUI();
    await PopupUI.RabbitHoleDepth.setDepthProgressUI();
    await PopupUI.RabbitHoleDepth.setDepthProgressStatusUI();
  }

  static setCurrentRabbitHoleGoalValueUI(goal: string) {
    PopupElements.currentRabbitHoleGoalValue.setText(` ${goal} `);
  }
}

export default PopupUI;
