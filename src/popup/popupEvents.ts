import ChromeStorage from "../chromeApi/storageData";
import { initRabbitHole } from "../rabbitHole/rabbitHole";
import toast from "../ui/toast";
import {
  createNewRabbitHoleText,
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
}

export default PopupEvents;
