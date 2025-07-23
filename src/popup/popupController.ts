import ChromeStorage from "../chromeApi/storageData";
import { Path, RabbitHole } from "../chromeApi/storageDataType";
import { currentRabbitHoleGoalValueInitialText } from "./constants";
import Popup from "./popup";
import RabbitHoleDepth from "../rabbitHole/rabbitHoleDepth/rabbitHoleDepth";

class PopupController {
  static initPopup = async () => {
    const recentSearch: Path = await ChromeStorage.get("recentSearch");

    const rabbitHole: RabbitHole = await ChromeStorage.get("rabbitHole");
    const { currentHoleDepth, currentPercent, maxHoleDepth } =
      await RabbitHoleDepth.Controller.getRabbitHoleDepthsAndPercentage();
    RabbitHoleDepth.UI.setAllRabbitHoleDepthUIs({
      currentHoleDepth,
      currentPercent,
      maxHoleDepth,
    });

    Popup.UI.setRecentSearchQueryUI(recentSearch?.searchQuery);
    Popup.UI.initLabelTexts();

    if (recentSearch) {
      Popup.Events.addToggleRecentSearchContentEvent();
      Popup.Events.addRabbitHoleStartButtonClickEvent(recentSearch, rabbitHole);
    }

    if (rabbitHole) {
      rabbitHole?.path.forEach((path: Path) => {
        Popup.UI.setRabbitHolePathItemUI(path);
      });
      Popup.UI.setCurrentRabbitHoleGoalValueUI(rabbitHole.query);
      Popup.UI.showCloseRabbitHoleButton();
      Popup.Events.addCloseRabbitHoleButtonClickEvent(rabbitHole);
    } else {
      Popup.UI.setCurrentRabbitHoleGoalValueUI(
        currentRabbitHoleGoalValueInitialText
      );
    }
  };
}
export default PopupController;
