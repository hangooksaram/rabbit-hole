import ChromeStorage from "../chromeApi/storageData";
import { DEFAULT_RABBIT_HOLE_MAX_DEPTH } from "../rabbitHole/rabbit-hole-constants";

export const badge = {
  default: (depth: number) => ({
    text: depth.toString(),
    color: "#FFA500",
  }),
  warning: {
    text: "warning",
    color: "red",
  },
};

export const setBadge = ({ text, color }: { text: string; color: string }) => {
  chrome.action.setBadgeText({ text });
  chrome.action.setBadgeBackgroundColor({ color });
};

export const setBadgeConditional = async () => {
  const rabbitHole = await ChromeStorage.get("rabbitHole");
  const setting = await ChromeStorage.get("setting");
  const isTooDeepFromEntrance = rabbitHole.holeDepth >= setting.maxHoleDepth;

  setBadge(badge.default(rabbitHole.holeDepth));

  if (isTooDeepFromEntrance) {
    setBadge(badge.warning);
  }
};
