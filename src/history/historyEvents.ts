import History from "./history";
import HistoryElements from "./ui/historyElements";

class HistoryEvents {
  static addHistoryOpenAndCloseButtonEvent() {
    HistoryElements.historyOpenButton.addEvent("click", async () => {
      History.UI.toggleHistory();
      const histories = await History.Controller.getAscSortedHistory();

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
