import ChromeStorage from "../chromeApi/storageData";
import { Path, RabbitHole } from "../chromeApi/storageDataType";
import { currentRabbitHoleGoalValueInitialText } from "./constants";
import PopupUI from "./ui/popupUI";
import Popup from "./popup";

class PopupController {
  static initPopup = async () => {
    const recentSearch: Path = await ChromeStorage.get("recentSearch");
    const rabbitHole: RabbitHole = await ChromeStorage.get("rabbitHole");

    await PopupUI.setRabbitHoleDepthUI();

    Popup.UI.setRecentSearchQueryUI(recentSearch?.searchQuery);
    Popup.UI.initLabelTexts();

    if (recentSearch) {
      Popup.Events.addToggleRecentSearchContentEvent();
      Popup.Events.addRabbitHoleStartButtonClickEvent();
    }

    if (rabbitHole) {
      rabbitHole?.path.forEach((path: Path) => {
        Popup.UI.setRabbitHolePathItemUI(path);
      });
      Popup.UI.setCurrentRabbitHoleGoalValueUI(rabbitHole.query);
      Popup.UI.showCloseRabbitHoleButton();
      Popup.Events.addCloseRabbitHoleButtonClickEvent();
    } else {
      Popup.UI.setCurrentRabbitHoleGoalValueUI(
        currentRabbitHoleGoalValueInitialText
      );
    }
  };
}
export default PopupController;
