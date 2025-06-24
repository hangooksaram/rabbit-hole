const goalLabelText = chrome.i18n.getMessage("goalLabelText");
const rabbitHoleDepthLabelText = chrome.i18n.getMessage(
  "rabbitHoleDepthLabelText"
);
const noSearchQueryText = chrome.i18n.getMessage("noSearchQueryText");
const newRabbitHoleText = chrome.i18n.getMessage("newRabbitHoleText");
const createNewRabbitHoleText = chrome.i18n.getMessage(
  "createNewRabbitHoleText"
);
const recentSearchQueryText = chrome.i18n.getMessage("recentSearchQueryText");
const currentRabbitHoleGoalValueInitialText = chrome.i18n.getMessage(
  "currentRabbitHoleGoalValueInitialText"
);
const saveText = chrome.i18n.getMessage("saveText");
const settingText = chrome.i18n.getMessage("settingText");

const depthProgressStatusCheckPoints: (keyof typeof depthProgressStatusText)[] =
  [1, 25, 50, 75, 99, 100, 125, 150, 175, 200];

const depthProgressStatusText = {
  1: chrome.i18n.getMessage("depthProgressStatusText1"),
  25: chrome.i18n.getMessage("depthProgressStatusText25"),
  50: chrome.i18n.getMessage("depthProgressStatusText50"),
  75: chrome.i18n.getMessage("depthProgressStatusText75"),
  99: chrome.i18n.getMessage("depthProgressStatusText99"),
  100: chrome.i18n.getMessage("depthProgressStatusText100"),
  125: chrome.i18n.getMessage("depthProgressStatusText125"),
  150: chrome.i18n.getMessage("depthProgressStatusText150"),
  175: chrome.i18n.getMessage("depthProgressStatusText175"),
  200: chrome.i18n.getMessage("depthProgressStatusText200"),
};

const hiddenClass = "hidden";
const scaleDownAnimation = "scale-down-center";
const kawaiAnimation = "jello-horizontal";
const slideInBottomAnimation = "slide-in-bottom";
const slideOutBottomAnimation = "slide-out-bottom";
const fadeInAnimation = "fade-in";
const fadeOutAnimation = "fade-out";
const toastStyle = {
  position: "fixed",
  top: "15px",
  right: "15px",
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
  zIndex: "2000",
};

export {
  noSearchQueryText,
  newRabbitHoleText,
  scaleDownAnimation,
  kawaiAnimation,
  slideInBottomAnimation,
  slideOutBottomAnimation,
  toastStyle,
  createNewRabbitHoleText,
  recentSearchQueryText,
  hiddenClass,
  fadeInAnimation,
  fadeOutAnimation,
  depthProgressStatusText,
  depthProgressStatusCheckPoints,
  currentRabbitHoleGoalValueInitialText,
  goalLabelText,
  rabbitHoleDepthLabelText,
  saveText,
  settingText,
};
