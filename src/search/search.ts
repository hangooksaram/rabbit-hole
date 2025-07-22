import { Path } from "../chromeApi/storageDataType";

export const SEARCH_PATTERNS: string[] = [
  "google.com/search?q=",
  "search.naver.com/search.naver?query=",
  "search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=",
  "youtube.com/results?search_query=",
];

export const getSearchDataFromTab = (tab: chrome.tabs.Tab) => {
  const { url, title } = tab;
  const { searchQuery, searchEngine } = parseSearchQueryAndEngine(title!);

  const newSearch: Path = {
    searchUrl: url,
    searchQuery,
    visitTime: new Date().getTime(),
    searchEngine,
  };

  return newSearch;
};

export const isInSearchUrlList = (url: string | undefined) =>
  SEARCH_PATTERNS.some((pattern) => url?.includes(pattern));

const parseSearchQueryAndEngine = (title: string) => {
  const searchQueryMatch = title?.match(/^(.*?)\s-\s(.*)$/);
  const searchQuery = searchQueryMatch ? searchQueryMatch[1] : title;
  const searchEngine = searchQueryMatch ? searchQueryMatch[2] : title;
  return { searchQuery, searchEngine };
};
