import { setBadgeConditional, setLoadingBadge } from "../badge/badge";

chrome.tabs.onUpdated.addListener(async (_, changeInfo, tab) => {
  if (changeInfo.status === "loading") {
    setLoadingBadge();
  }

  if (changeInfo.status === "complete") {
    await setBadgeConditional();
  }
});

chrome.runtime.onMessage.addListener(async (_, changeInfo, sendResponse) => {
  await setBadgeConditional();
});
