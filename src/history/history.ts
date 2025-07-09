import HistoryController from "./historyController";
import HistoryEvents from "./historyEvents";
import HistoryUI from "./ui/historyUI";

class History {
  static UI = HistoryUI;
  static Events = HistoryEvents;
  static Controller = HistoryController;
}

export default History;
