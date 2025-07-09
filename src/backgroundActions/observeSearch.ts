import { setBadgeConditional } from "../badge/badge";
import ChromeStorage from "../chromeApi/storageData";
import { Path } from "../chromeApi/storageDataType";
import { saveRabbitHolePaths } from "../rabbitHole/rabbitHole";

chrome.tabs.onUpdated.addListener(async (_, changeInfo, tab) => {
  try {
    if (isTabUpdated(changeInfo, tab)) {
      const { url, title } = tab;
      const isSearchUrl = SEARCH_PATTERNS.some((pattern) =>
        url?.includes(pattern)
      );
      if (!isSearchUrl) {
        return;
      }

      const { searchQuery, searchEngine } = getSearchQueryAndEngine(title!);

      const newSearch: Path = {
        searchUrl: url,
        searchQuery,
        visitTime: new Date().getTime(),
        searchEngine,
      };

      ChromeStorage.set("recentSearch", newSearch);

      await saveRabbitHolePaths(newSearch);
      await setBadgeConditional();
    }
  } catch (error) {
    console.error("Error in onUpdated listener:", error);
  }
});

export const SEARCH_PATTERNS: string[] = [
  "google.com/search?q=",
  "search.naver.com/search.naver?query=",
  "search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=",
  "youtube.com/results?search_query=",
];

const isTabUpdated = (
  changeInfo: chrome.tabs.TabChangeInfo,
  tab: chrome.tabs.Tab
) => {
  return changeInfo.status === "complete" && tab.url !== undefined;
};

const getSearchQueryAndEngine = (title: string) => {
  const searchQueryMatch = title?.match(/^(.*?)\s-\s(.*)$/);
  const searchQuery = searchQueryMatch ? searchQueryMatch[1] : title;
  const searchEngine = searchQueryMatch ? searchQueryMatch[2] : title;
  return { searchQuery, searchEngine };
};
