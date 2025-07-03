import ChromeStorage from "../chromeApi/storageData";
import { History } from "../chromeApi/storageDataType";
import RabbitHoleDepth from "../rabbitHole/depth";
import { initRabbitHole } from "../rabbitHole/rabbitHole";
import { RabbitHoleHistoryItem } from "../rabbitHole/rabbitHoleHistoryItem";
import toast from "../ui/toast";
import {
  closeRabbitHoleButtonText,
  createNewRabbitHoleText,
  goalLabelText,
  kawaiAnimation,
  newRabbitHoleText,
  noSearchQueryText,
  rabbitHoleDepthLabelText,
  recentSearchQueryText,
  scaleDownAnimation,
} from "./constants";
import PopupElements from "./popupElements";

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

  static addRabbitHoleStartButtonClickEvent() {
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

  static addToggleRecentSearchContentEvent() {
    PopupElements.recentSearchBox.addEvent("mouseenter", () => {
      PopupElements.recentSearch.toggleClass(scaleDownAnimation);
      PopupElements.recentSearchLabel.setText(createNewRabbitHoleText);
      PopupElements.createRabbitHoleImage.toggleClass(kawaiAnimation);
    });

    PopupElements.recentSearchBox.addEvent("mouseleave", () => {
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
    PopupElements.currentRabbitHoleGoalValue.setText(`${goal}`);
  }

  static setGoalLabelText() {
    PopupElements.goalLabel.setText(goalLabelText);
  }

  static setRecentSearchLabelText() {
    PopupElements.recentSearchLabel.setText(recentSearchQueryText);
  }

  static setCloseRabbitHoleLabelText() {
    PopupElements.closeRabbitHoleButton.setText(closeRabbitHoleButtonText);
  }

  static showCloseRabbitHoleButton() {
    PopupElements.closeRabbitHoleButton.removeClass("hidden");
  }
}

export default PopupUI;
