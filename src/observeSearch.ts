import { RabbitHole } from "./chromeApi/chromeLocalData";
import ChromeStorage from "./chromeApi/storageData";
import { saveRabbitHoleHistories, saveRecentSearch } from "./saveHistory";

// 검색 엔진 URL 패턴 (예: 구글 검색)
export const SEARCH_PATTERNS: string[] = [
  "google.com/search?q=",
  "search.naver.com/search.naver?query=",
  "search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=",
  "youtube.com/results?search_query=",
];

// 탭 업데이트 이벤트 리스너
chrome.tabs.onUpdated.addListener(async (_, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url !== undefined) {
    const { url, title } = tab;
    // 검색 엔진 URL인지 확인
    const isSearchUrl = SEARCH_PATTERNS.some((pattern) =>
      url?.includes(pattern)
    );
    if (!isSearchUrl) {
      return;
    }

    saveRecentSearch({ searchUrl: url, searchQuery: title! });

    const rabbitHole = await ChromeStorage.get("rabbitHole");

    if (rabbitHole) {
      saveRabbitHoleHistories(url, title!);
    }
  }
});
