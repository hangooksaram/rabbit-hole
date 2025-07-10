import ChromeStorage from "../../chromeApi/storageData";
import { RabbitHole } from "../../chromeApi/storageDataType";
import {
  emptyHistoryText,
  hiddenClass,
  historyLabelText,
  slideInBottomAnimation,
  slideOutBottomAnimation,
} from "../../popup/constants";
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

  static setHistoryItemUI(historyItem: RabbitHole, index: number) {
    const newHistoryItem = new HistoryItem(historyItem, index);

    HistoryElements.historyList.appendChild(newHistoryItem.getElement());

    newHistoryItem.setHistoryItemUI(index);
  }

  static setHistoryListUI = (histories: RabbitHole[] | []) => {
    histories?.forEach((history, index) => {
      HistoryUI.setHistoryItemUI(history, index);
    });
  };

  static initHistoryListUI = () => {
    HistoryElements.historyList.clearChildren();
  };

  static setEmptyUI = () => {
    HistoryElements.historyList.clearChildren();
    const emptyElement = document.createElement("div");
    emptyElement.className = "empty-history";
    emptyElement.textContent = emptyHistoryText;
    HistoryElements.historyList.appendChild(emptyElement);
  };
}

export default HistoryUI;
