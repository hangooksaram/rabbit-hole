import { setBadgeConditional } from "../badge/badge";
import ChromeStorage from "../chromeApi/storageData";
import { saveRabbitHoleHistories } from "../rabbitHole/saveHistory";

// 검색 엔진 URL 패턴 (예: 구글 검색)
export const SEARCH_PATTERNS: string[] = [
  "google.com/search?q=",
  "search.naver.com/search.naver?query=",
  "search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=",
  "youtube.com/results?search_query=",
];

chrome.tabs.onUpdated.addListener(async (_, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url !== undefined) {
    const { url, title } = tab;
    const isSearchUrl = SEARCH_PATTERNS.some((pattern) =>
      url?.includes(pattern)
    );
    if (!isSearchUrl) {
      return;
    }

    ChromeStorage.set("recentSearch", { searchUrl: url, searchQuery: title! });

    const rabbitHole = await ChromeStorage.get("rabbitHole");

    if (rabbitHole) {
      await saveRabbitHoleHistories(url, title!);

      await setBadgeConditional();
    }
  }
});
