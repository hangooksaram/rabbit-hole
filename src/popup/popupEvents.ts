import { setBadgeConditional } from "../badge/badge";
import ChromeStorage from "../chromeApi/storageData";
import { appendHistory } from "../history/history";
import HistoryEvents from "../history/historyEvents";
import { initRabbitHole } from "../rabbitHole/rabbitHole";
import toast from "../ui/toast";
import {
  closeSuccessText,
  createNewRabbitHoleText,
  currentRabbitHoleGoalValueInitialText,
  kawaiAnimation,
  newRabbitHoleText,
  recentSearchQueryText,
  scaleDownAnimation,
} from "./constants";
import PopupElements from "./popupElements";
import PopupUI from "./popupUI";

class PopupEvents {
  static addRabbitHoleStartButtonClickEvent() {
    PopupElements.createRabbitHoleImage.addEvent("click", async () => {
      const recentSearch = await ChromeStorage.get("recentSearch");
      initRabbitHole(recentSearch?.searchQuery || "", async () => {
        const rabbitHole = await ChromeStorage.get("rabbitHole");
        toast(newRabbitHoleText);

        await PopupUI.setRabbitHoleDepthUI();

        PopupUI.setCurrentRabbitHoleGoalValueUI(rabbitHole.query);
        PopupUI.showCloseRabbitHoleButton();

        PopupUI.initRabbitHoleUI();
        await setBadgeConditional();
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

  static addCloseRabbitHoleButtonClickEvent() {
    PopupElements.closeRabbitHoleButton.addEvent("click", async () => {
      const currentRabbitHole = await ChromeStorage.get("rabbitHole");
      await appendHistory(currentRabbitHole);
      await ChromeStorage.remove("rabbitHole");
      await PopupUI.setRabbitHoleDepthUI();

      PopupUI.hideCloseRabbitHoleButton();
      PopupUI.initRabbitHoleUI();
      PopupUI.setCurrentRabbitHoleGoalValueUI(
        currentRabbitHoleGoalValueInitialText
      );
      await setBadgeConditional();
      toast(closeSuccessText);
    });
  }
}

export default PopupEvents;
