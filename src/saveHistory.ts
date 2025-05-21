import { HistoryItem, StorageData } from "./chromeLocalData";

const isUrlDuplicated = (
  searchUrl: string,
  savedHistory: HistoryItem[]
): boolean => {
  return savedHistory.some((item) => item.searchUrl === searchUrl);
};

export function getSavedHistory(cb: (data: StorageData) => void) {
  chrome.storage.local.get<StorageData>("savedHistory", cb);
}

export function saveHistoryFromSearch(
  searchUrl: string,
  searchQuery: string
): void {
  // 현재 시간 저장
  const searchTime = new Date().getTime();

  chrome.storage.local.get<StorageData>("savedHistory", (histories) => {
    let savedHistory = histories.savedHistory || [];

    // 검색 URL이 이미 저장되어 있는지 확인
    if (isUrlDuplicated(searchUrl, savedHistory)) {
      return;
    }

    // 새 검색 URL 추가
    savedHistory.push({
      searchUrl,
      searchQuery,
      visitTime: searchTime,
    });

    // 업데이트된 기록 저장
    chrome.storage.local.set({ savedHistory }, () => {
      console.log("새 검색 기록이 저장되었습니다:", savedHistory);
    });
  });
}
