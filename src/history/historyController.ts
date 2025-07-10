import ChromeStorage from "../chromeApi/storageData";
import { RabbitHole } from "../chromeApi/storageDataType";
import History from "./history";

class HistoryController {
  static initHistory = async () => {
    History.Events.addHistoryOpenAndCloseButtonEvent();
    History.UI.setLabelTexts();
    await History.UI.setHistoryListUI();
  };

  static appendHistory = async (newHistory: RabbitHole) => {
    try {
      const history = await ChromeStorage.get("history");
      let newHistoryList: RabbitHole[] = [];
      if (history) {
        newHistoryList = [...history, newHistory];
      } else {
        newHistoryList = [newHistory];
      }

      await ChromeStorage.set("history", newHistoryList);
    } catch (error) {
      console.error("Error adding history:", error);
    }
  };
}

export default HistoryController;
