import { setBadgeConditional } from "./badge/badge";

chrome.tabs.onUpdated.addListener(async (_, __, tab) => {
  await setBadgeConditional();
});

chrome.runtime.onMessage.addListener(async (_, __, sendResponse) => {
  await setBadgeConditional();
});
