import ChromeStorage from "../chromeApi/storageData";
import { RabbitHole } from "../chromeApi/storageDataType";
import IHistoryController from "./abstract/HistoryControllerInterface";
import History from "./history";

class HistoryController extends IHistoryController {
  static getHistory = async (): Promise<RabbitHole[]> => {
    try {
      const histories = await ChromeStorage.get("history");
      return histories || [];
    } catch (error) {
      return [];
    }
  };

  static setHistory = async (newHistoryList: RabbitHole[]) => {
    try {
      await ChromeStorage.set("history", newHistoryList);
    } catch (error) {
      console.error("Error setting history:", error);
    }
  };

  static getAscSortedHistory = async (): Promise<RabbitHole[]> => {
    try {
      const histories = await HistoryController.getHistory();
      return histories.sort((a, b) => a.percent - b.percent);
    } catch (error) {
      return [];
    }
  };

  static initHistory = async () => {
    const histories = await HistoryController.getAscSortedHistory();
    History.Events.addHistoryOpenAndCloseButtonEvent(histories);
    History.UI.setLabelTexts();
  };

  static appendHistory = async (newHistory: RabbitHole) => {
    const histories = await HistoryController.getHistory();
    let newHistoryList: RabbitHole[] = [];
    if (histories.length > 0) {
      newHistoryList = [...histories, newHistory];
    } else {
      newHistoryList = [newHistory];
    }

    await HistoryController.setHistory(newHistoryList);
  };
}

export default HistoryController;
