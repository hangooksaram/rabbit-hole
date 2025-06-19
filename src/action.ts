import { setBadgeConditional } from "./badge/badge";
import ChromeStorage from "./chromeApi/storageData";
import { DEFAULT_RABBIT_HOLE_MAX_DEPTH } from "./rabbitHole/rabbit-hole-constants";

chrome.tabs.onUpdated.addListener(async (_, __, tab) => {
  await setBadgeConditional();
});

chrome.runtime.onMessage.addListener(async (_, __, sendResponse) => {
  await setBadgeConditional();
});

chrome.runtime.onInstalled.addListener(async () => {
  ChromeStorage.set("setting", { maxHoleDepth: DEFAULT_RABBIT_HOLE_MAX_DEPTH });
});
