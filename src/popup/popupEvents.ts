import { setBadgeConditional } from "../badge/badge";
import ChromeStorage from "../chromeApi/storageData";
import History from "../history/history";
import { initRabbitHole } from "../rabbitHole/rabbitHole";
import RabbitHoleDepth from "../rabbitHole/rabbitHoleDepth/rabbitHoleDepth";
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
import Popup from "./popup";
import PopupElements from "./ui/popupElements";

class PopupEvents {
  static addRabbitHoleStartButtonClickEvent() {
    PopupElements.createRabbitHoleImage.addEvent("click", async () => {
      const recentSearch = await ChromeStorage.get("recentSearch");
      initRabbitHole(recentSearch?.searchQuery || "", async () => {
        const rabbitHole = await ChromeStorage.get("rabbitHole");
        toast(newRabbitHoleText);

        const { currentHoleDepth, currentPercent, maxHoleDepth } =
          await RabbitHoleDepth.Controller.getRabbitHoleDepthsAndPercentage();
        RabbitHoleDepth.UI.setAllRabbitHoleDepthUIs({
          currentHoleDepth,
          currentPercent,
          maxHoleDepth,
        });

        Popup.UI.setCurrentRabbitHoleGoalValueUI(rabbitHole.query);
        Popup.UI.showCloseRabbitHoleButton();

        Popup.UI.initRabbitHoleUI();
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

      if (currentRabbitHole.holeDepth > 0) {
        await History.Controller.appendHistory(currentRabbitHole);
      }

      await ChromeStorage.remove("rabbitHole");
      const { currentHoleDepth, currentPercent, maxHoleDepth } =
        await RabbitHoleDepth.Controller.getRabbitHoleDepthsAndPercentage();
      RabbitHoleDepth.UI.setAllRabbitHoleDepthUIs({
        currentHoleDepth,
        currentPercent,
        maxHoleDepth,
      });

      Popup.UI.hideCloseRabbitHoleButton();
      Popup.UI.initRabbitHoleUI();
      Popup.UI.setCurrentRabbitHoleGoalValueUI(
        currentRabbitHoleGoalValueInitialText
      );
      await setBadgeConditional();
      toast(closeSuccessText);
    });
  }
}

export default PopupEvents;
