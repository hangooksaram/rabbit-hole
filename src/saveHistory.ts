import { History, RabbitHole } from "./chromeApi/chromeLocalData";
import ChromeStorage from "./chromeApi/storageData";

const isUrlDuplicated = (
  searchUrl: string,
  savedHistory: History[]
): boolean => {
  return savedHistory.some((item) => item.searchUrl === searchUrl);
};

export function saveRecentSearch(searchQuery: History): void {
  const searchTime = new Date().getTime();
  chrome.storage.local.set({
    recentSearch: { ...searchQuery, visitTime: searchTime },
  });
}

export async function saveRabbitHoleHistories(
  searchUrl: string,
  searchQuery: string
) {
  // 현재 시간 저장
  const searchTime = new Date().getTime();

  const rabbitHole = await ChromeStorage.get("rabbitHole");
  const savedHistory = rabbitHole.history || [];

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
  chrome.storage.local.set(
    { rabbitHole: { ...rabbitHole, history: savedHistory } },
    () => {
      console.log("Rabbit Hole 의 history가 갱신되었습니다 :", rabbitHole);
    }
  );
}
