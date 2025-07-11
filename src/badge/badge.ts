import ChromeStorage from "../chromeApi/storageData";
import { DEFAULT_RABBIT_HOLE_MAX_DEPTH } from "../rabbitHole/constants";
import { getCurrentRabbitHoleDepth } from "../rabbitHole/rabbitHole";

export const badge = {
  default: (depth: number) => ({
    text: depth.toString(),
    color: "#814fff",
  }),
  warning: {
    text: "!",
    color: "red",
  },
  loading: {
    text: "…",
    color: "#814fff",
  },
  initial: {
    text: "",
    color: "#814fff",
  },
};

export const setBadge = ({ text, color }: { text: string; color: string }) => {
  chrome.action.setBadgeText({ text });
  chrome.action.setBadgeBackgroundColor({ color });
};

const isTooDeepFromEntrance = async () => {
  const rabbitHole = await ChromeStorage.get("rabbitHole");
  const setting = await ChromeStorage.get("setting");
  return rabbitHole.holeDepth >= setting.maxHoleDepth;
};

export const setLoadingBadge = () => {
  setBadge(badge.loading);
};

export const setBadgeConditional = async () => {
  try {
    const rabbitHoleDepth = await getCurrentRabbitHoleDepth();

    if (await isTooDeepFromEntrance()) {
      setBadge(badge.warning);
      return;
    }
    setBadge(badge.default(rabbitHoleDepth));
    return;
  } catch (error) {
    setBadge(badge.initial);
  }
};
