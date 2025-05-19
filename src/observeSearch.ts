import { saveHistoryFromSearch } from "./saveHistory";

// 검색 엔진 URL 패턴 (예: 구글 검색)
export const SEARCH_PATTERNS: string[] = [
  "google.com/search?q=",
  "search.naver.com/search.naver?query=",
  "search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=",
  "youtube.com/results?search_query=",
];

// 탭 업데이트 이벤트 리스너
chrome.tabs.onUpdated.addListener((_, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url !== undefined) {
    const { url, title } = tab;

    // 검색 엔진 URL인지 확인
    const isSearchUrl = SEARCH_PATTERNS.some((pattern) =>
      url?.includes(pattern)
    );

    if (isSearchUrl) {
      saveHistoryFromSearch(url, title!);
    }
  }
});
