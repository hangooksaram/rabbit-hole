import { setBadgeConditional } from "../badge/badge";
import ChromeStorage from "../chromeApi/storageData";
import { History } from "../chromeApi/storageDataType";
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

    const searchQueryMatch = title?.match(/^(.*?)\s-\s(.*)$/);
    const searchQuery = searchQueryMatch ? searchQueryMatch[1] : title;
    const searchEngine = searchQueryMatch ? searchQueryMatch[2] : title;

    const newSearch: History = {
      searchUrl: url,
      searchQuery,
      visitTime: new Date().getTime(),
      searchEngine,
    };

    ChromeStorage.set("recentSearch", newSearch);

    const rabbitHole = await ChromeStorage.get("rabbitHole");

    if (rabbitHole) {
      await saveRabbitHoleHistories(newSearch);

      await setBadgeConditional();
    }
  }
});
