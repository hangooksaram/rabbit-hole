import { setBadgeConditional } from "../badge/badge";
import ChromeStorage from "../chromeApi/storageData";
import { Path, RabbitHole } from "../chromeApi/storageDataType";
import History from "../history/history";
import {
  getRabbitHole,
  initRabbitHole,
  removeRabbitHole,
} from "../rabbitHole/rabbitHole";
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
  static addRabbitHoleStartButtonClickEvent(recentSearch: Path) {
    PopupElements.createRabbitHoleImage.addEvent("click", async () => {
      initRabbitHole(recentSearch.searchQuery || "", async () => {
        toast(newRabbitHoleText);

        const rabbitHole = await getRabbitHole();
        const { currentHoleDepth, currentPercent, maxHoleDepth } =
          await RabbitHoleDepth.Controller.getRabbitHoleDepthsAndPercentage();
        RabbitHoleDepth.UI.setAllRabbitHoleDepthUIs({
          currentHoleDepth,
          currentPercent,
          maxHoleDepth,
        });

        Popup.UI.setCurrentRabbitHoleGoalValueUI(rabbitHole!.query);
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

  static addCloseRabbitHoleButtonClickEvent(currentRabbitHole: RabbitHole) {
    PopupElements.closeRabbitHoleButton.addEvent("click", async () => {
      const rabbitHole = currentRabbitHole || (await getRabbitHole());

      if (rabbitHole.holeDepth > 0) {
        await History.Controller.appendHistory(rabbitHole);
        History.UI.setHistoryItemUI(rabbitHole, 0);
      }

      await removeRabbitHole();
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
