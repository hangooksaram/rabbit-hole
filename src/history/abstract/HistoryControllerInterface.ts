import { RabbitHole } from "../../chromeApi/storageDataType";

class IHistoryController {
  initHistory() {}
  getHistory(): Promise<RabbitHole[]> {
    return Promise.resolve([]);
  }
  setHistory(newHistoryList: RabbitHole[]): Promise<void> {
    return Promise.resolve();
  }
  getAscSortedHistory(): Promise<RabbitHole[]> {
    return Promise.resolve([]);
  }
  appendHistory(newHistory: RabbitHole): Promise<void> {
    return Promise.resolve();
  }
}
export default IHistoryController;
