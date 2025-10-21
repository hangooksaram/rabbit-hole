import { RabbitHole } from "../chromeApi/storageDataType";
import HistoryElements from "./ui/historyElements";
import HistoryUI from "./ui/historyUI";

class HistoryEvents {
  static addHistoryOpenAndCloseButtonEvent(histories: RabbitHole[]) {
    HistoryElements.historyOpenButton.addEvent("click", () => {
      HistoryUI.toggleHistory();
      if (!histories || histories.length === 0) {
        HistoryUI.setEmptyUI();
        return;
      }
      HistoryUI.setHistoryListUI(histories);
    });

    HistoryElements.historyCloseButton.addEvent("click", () => {
      HistoryUI.toggleHistory();
      HistoryUI.initHistoryListUI();
    });
  }
}

export default HistoryEvents;
