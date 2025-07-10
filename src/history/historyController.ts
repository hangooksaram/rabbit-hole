import ChromeStorage from "../chromeApi/storageData";
import { RabbitHole } from "../chromeApi/storageDataType";
import History from "./history";

class HistoryController {
  static getAscSortedHistory = async (): Promise<RabbitHole[]> => {
    try {
      const histories = await ChromeStorage.get("history");
      histories?.forEach((history) => console.log(history));
      return histories?.sort((a, b) => a.percent - b.percent) || [];
    } catch (error) {
      console.error("Error fetching sorted history:", error);
      return [];
    }
  };

  static initHistory = async () => {
    History.Events.addHistoryOpenAndCloseButtonEvent();
    History.UI.setLabelTexts();
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
