import { RabbitHole } from "../chromeApi/storageDataType";
import History from "./history";
import HistoryElements from "./ui/historyElements";

class HistoryEvents {
  static addHistoryOpenAndCloseButtonEvent(histories: RabbitHole[]) {
    HistoryElements.historyOpenButton.addEvent("click", () => {
      History.UI.toggleHistory();
      if (!histories || histories.length === 0) {
        History.UI.setEmptyUI();
        return;
      }
      History.UI.setHistoryListUI(histories);
    });

    HistoryElements.historyCloseButton.addEvent("click", () => {
      History.UI.toggleHistory();
      History.UI.initHistoryListUI();
    });
  }
}

export default HistoryEvents;
