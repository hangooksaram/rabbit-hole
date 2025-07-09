import ChromeStorage from "../chromeApi/storageData";
import { DEFAULT_RABBIT_HOLE_MAX_DEPTH } from "../rabbitHole/constants";

chrome.runtime.onInstalled.addListener(async () => {
  ChromeStorage.set("setting", { maxHoleDepth: DEFAULT_RABBIT_HOLE_MAX_DEPTH });
});
