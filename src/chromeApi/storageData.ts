import { StorageData } from "./chromeLocalData";

export default class ChromeStorage {
  static async get<T extends keyof StorageData>(
    key: T
  ): Promise<StorageData[T]> {
    return new Promise((resolve) => {
      chrome.storage.local.get(key, (result) => {
        resolve(result[key]);
      });
    });
  }

  static async set<T extends keyof StorageData>(
    key: T,
    value: StorageData[T]
  ): Promise<void> {
    return new Promise((resolve) => {
      const data = { [key]: value };
      chrome.storage.local.set(data, () => {
        resolve();
      });
    });
  }
}
