import { Path } from "../../chromeApi/storageDataType";
import RabbitHoleDepth from "../../rabbitHole/rabbitHoleDepth/rabbitHoleDepth";
import { RabbitHolePathItem } from "../../rabbitHole/rabbitHolePathItem";
import Setting from "../../setting/setting";
import {
  closeRabbitHoleButtonText,
  goalLabelText,
  noSearchQueryText,
  recentSearchQueryText,
} from "../constants";
import PopupElements from "./popupElements";

class PopupUI {
  static setRecentSearchQueryUI(query: string | undefined) {
    PopupElements.recentSearchText.setText(query || noSearchQueryText);
  }

  static initRabbitHoleUI() {
    PopupElements.rabbitHolePath.clearChildren();
  }

  static setRabbitHolePathItemUI(path: Path) {
    const newRabbitHolePathItem = new RabbitHolePathItem(path).getElement();

    PopupElements.rabbitHolePath.appendChild(newRabbitHolePathItem);
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

  static hideCloseRabbitHoleButton() {
    PopupElements.closeRabbitHoleButton.addClass("hidden");
  }

  static initLabelTexts = () => {
    PopupUI.setGoalLabelText();
    PopupUI.setRecentSearchLabelText();
    PopupUI.setCloseRabbitHoleLabelText();
  };
}

export default PopupUI;
