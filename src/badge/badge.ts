import ChromeStorage from "../chromeApi/storageData";
import { DEFAULT_RABBIT_HOLE_MAX_DEPTH } from "../rabbitHole/constants";

export const badge = {
  default: (depth: number) => ({
    text: depth.toString(),
    color: "#814fff",
  }),
  warning: {
    text: "!",
    color: "red",
  },
};

export const setBadge = ({ text, color }: { text: string; color: string }) => {
  chrome.action.setBadgeText({ text });
  chrome.action.setBadgeBackgroundColor({ color });
};

export const setBadgeConditional = async () => {
  try {
    const rabbitHole = await ChromeStorage.get("rabbitHole");
    const setting = await ChromeStorage.get("setting");

    const isTooDeepFromEntrance = rabbitHole.holeDepth >= setting.maxHoleDepth;

    if (isTooDeepFromEntrance) {
      setBadge(badge.warning);
      return;
    }
    setBadge(badge.default(rabbitHole.holeDepth));
    return;
  } catch (_) {
    setBadge(badge.default(0));
  }
};
