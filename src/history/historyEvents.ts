import ChromeStorage from "../chromeApi/storageData";
import { appendHistory } from "./history";
import HistoryElements from "./historyElements";
import HistoryUI from "./historyUI";

class HistoryEvents {
  static addHistoryOpenAndCloseButtonEvent() {
    HistoryElements.historyOpenButton.addEvent("click", () => {
      HistoryUI.toggleHistory();
    });

    HistoryElements.historyCloseButton.addEvent("click", () => {
      HistoryUI.toggleHistory();
    });
  }
}

export default HistoryEvents;
