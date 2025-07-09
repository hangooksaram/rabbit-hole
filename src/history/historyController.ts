import ChromeStorage from "../chromeApi/storageData";
import HistoryUI from "./historyUI";

const initHistoryList = async () => {
  try {
    const histories = await ChromeStorage.get("history");

    histories?.forEach((history) => {
      HistoryUI.setHistoryItemUI(history);
    });
  } catch (error) {
    console.error("Error initializing history list:", error);
  }
};

export { initHistoryList };
