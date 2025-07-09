import ChromeStorage from "../chromeApi/storageData";
import { RabbitHole } from "../chromeApi/storageDataType";

const appendHistory = async (newHistory: RabbitHole) => {
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

export { appendHistory };
