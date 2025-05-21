import { StorageData } from "./chromeLocalData";

export function getChromeLocalData<T extends keyof StorageData>(
  key: T,
  cb: (data: StorageData[T]) => void
): void {
  chrome.storage.local.get(key, (data) => cb(data[key]));
}
