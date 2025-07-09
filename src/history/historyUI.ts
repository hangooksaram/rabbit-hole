import { RabbitHole } from "../chromeApi/storageDataType";
import {
  hiddenClass,
  historyLabelText,
  slideInBottomAnimation,
  slideOutBottomAnimation,
} from "../popup/constants";
import HistoryElements from "./historyElements";
import HistoryItem from "./historyItem";

class HistoryUI {
  static toggleHistory() {
    HistoryElements.historyContainer.toggleClass(hiddenClass);
    HistoryElements.historyContainer.toggleClass(slideInBottomAnimation);
    HistoryElements.historyContainer.toggleClass(slideOutBottomAnimation);
  }

  static closeHistoryPopup() {
    HistoryElements.historyContainer.toggleClass(hiddenClass);
  }

  static setHitsoryLabelText() {
    HistoryElements.hisotryLabel.setText(historyLabelText);
  }

  static setLabelTexts() {
    HistoryUI.setHitsoryLabelText();
  }

  static setHistoryItemUI(historyItem: RabbitHole) {
    const newHistoryItem = new HistoryItem(historyItem).getElement();
    HistoryElements.historyContainer.appendChild(newHistoryItem);
  }
}

export default HistoryUI;
