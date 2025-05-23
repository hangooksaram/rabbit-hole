import { badge, setBadge } from "./badge/badge";
import ChromeStorage from "./chromeApi/storageData";
import { DEFAULT_RABBIT_HOLE_MAX_DEPTH } from "./rabbitHole/rabbit-hole-constants";

chrome.tabs.onUpdated.addListener(async (_, __, tab) => {
  const rabbitHole = await ChromeStorage.get("rabbitHole");
  const isTooDeepFromEntrance =
    rabbitHole.holeDepth >= DEFAULT_RABBIT_HOLE_MAX_DEPTH;

  setBadge(badge.default(rabbitHole.holeDepth));

  if (isTooDeepFromEntrance) {
    setBadge(badge.warning);
  }
});
