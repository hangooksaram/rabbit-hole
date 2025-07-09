import ChromeStorage from "../chromeApi/storageData";
import { Path, RabbitHole } from "../chromeApi/storageDataType";
import { currentRabbitHoleGoalValueInitialText } from "./constants";
import PopupUI from "./popupUI";
import {
  addEnterEventToSubmitButton,
  initSubmitSettingButton,
  setSettingLabelTexts,
} from "../setting/settingController";
import SettingUI from "../setting/settingUI";
import PopupEvents from "./popupEvents";
import HistoryEvents from "../history/historyEvents";
import HistoryUI from "../history/historyUI";
import { initHistoryList } from "../history/historyController";

const initPopup = async () => {
  const recentSearch: Path = await ChromeStorage.get("recentSearch");
  const rabbitHole: RabbitHole = await ChromeStorage.get("rabbitHole");

  await PopupUI.setRabbitHoleDepthUI();

  PopupUI.setRecentSearchQueryUI(recentSearch?.searchQuery);
  initLableTexts();

  if (recentSearch) {
    PopupEvents.addToggleRecentSearchContentEvent();
    PopupEvents.addRabbitHoleStartButtonClickEvent();
  }

  if (rabbitHole) {
    rabbitHole?.path.forEach((path: Path) => {
      PopupUI.setRabbitHolePathItemUI(path);
    });
    PopupUI.setCurrentRabbitHoleGoalValueUI(rabbitHole.query);
    PopupUI.showCloseRabbitHoleButton();
    PopupEvents.addCloseRabbitHoleButtonClickEvent();
  } else {
    PopupUI.setCurrentRabbitHoleGoalValueUI(
      currentRabbitHoleGoalValueInitialText
    );
  }
};

const initLableTexts = () => {
  PopupUI.setGoalLabelText();
  PopupUI.setRecentSearchLabelText();
  PopupUI.setCloseRabbitHoleLabelText();
};

const initSetting = async () => {
  await SettingUI.init();
  await initSubmitSettingButton();
  addEnterEventToSubmitButton();
  setSettingLabelTexts();
};

const initHistory = async () => {
  HistoryEvents.addHistoryOpenAndCloseButtonEvent();
  HistoryUI.setLabelTexts();
  await initHistoryList();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", async () => {
    await initPopup();
    await initSetting();
    initHistory();
  });
} else {
  (async () => {
    await initPopup();
    await initSetting();
    initHistory();
  })();
}
