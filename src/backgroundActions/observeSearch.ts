import { setBadgeConditional } from "../badge/badge";
import ChromeStorage from "../chromeApi/storageData";
import { saveRabbitHolePaths } from "../rabbitHole/rabbitHole";
import { getSearchDataFromTab, isInSearchUrlList } from "../search/search";

chrome.tabs.onUpdated.addListener(async (_, changeInfo, tab) => {
  if (!isOnUpdatedLogicEnabled(changeInfo, tab)) {
    return;
  }

  const search = getSearchDataFromTab(tab);
  await ChromeStorage.set("recentSearch", search);

  const existRabbitHole = await ChromeStorage.get("rabbitHole");
  if (existRabbitHole) {
    await saveRabbitHolePaths(search);
  }
  await setBadgeConditional();
});

const isOnUpdatedLogicEnabled = (
  changeInfo: chrome.tabs.TabChangeInfo,
  tab: chrome.tabs.Tab
) => isTabUpdated(changeInfo, tab) && isInSearchUrlList(tab.url);

const isTabUpdated = (
  changeInfo: chrome.tabs.TabChangeInfo,
  tab: chrome.tabs.Tab
) => {
  return changeInfo.status === "complete" && tab.url !== undefined;
};
