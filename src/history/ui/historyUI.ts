import ChromeStorage from "../../chromeApi/storageData";
import { RabbitHole } from "../../chromeApi/storageDataType";
import {
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

  static setHistoryItemUI(historyItem: RabbitHole) {
    const newHistoryItem = new HistoryItem(historyItem).getElement();
    HistoryElements.historyList.appendChild(newHistoryItem);
  }

  static setHistoryListUI = async () => {
    try {
      const histories = await ChromeStorage.get("history");

      histories?.forEach((history) => {
        HistoryUI.setHistoryItemUI(history);
      });
    } catch (error) {
      console.error("Error initializing history list:", error);
    }
  };
}

export default HistoryUI;
