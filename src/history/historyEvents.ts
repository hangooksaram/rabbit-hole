import History from "./history";
import HistoryElements from "./ui/historyElements";

class HistoryEvents {
  static addHistoryOpenAndCloseButtonEvent() {
    HistoryElements.historyOpenButton.addEvent("click", async () => {
      History.UI.toggleHistory();
      await History.UI.setHistoryListUI();
    });

    HistoryElements.historyCloseButton.addEvent("click", () => {
      History.UI.toggleHistory();
    });
  }
}

export default HistoryEvents;
