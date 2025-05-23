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
