import History from "./history";
import HistoryController from "./historyController";
import HistoryElements from "./ui/historyElements";

class HistoryEvents {
  static addHistoryOpenAndCloseButtonEvent() {
    HistoryElements.historyOpenButton.addEvent("click", async () => {
      History.UI.toggleHistory();
      await History.Controller.initHistoryList();
    });

    HistoryElements.historyCloseButton.addEvent("click", () => {
      History.UI.toggleHistory();
    });
  }
}

export default HistoryEvents;
