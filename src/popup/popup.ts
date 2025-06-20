import ChromeStorage from "../chromeApi/storageData";
import { History, RabbitHole } from "../chromeApi/storageDataType";
import { currentRabbitHoleGoalValueInitialText } from "./constants";
import PopupUI from "./popupUI";
import {
  addEnterEventToSubmitButton,
  initSubmitSettingButton,
} from "./setting/setting";
import SettingUI from "./setting/settingUI";

const initPopup = async () => {
  const recentSearch: History = await ChromeStorage.get("recentSearch");
  const rabbitHole: RabbitHole = await ChromeStorage.get("rabbitHole");

  await PopupUI.setRabbitHoleDepthUI();

  if (recentSearch) {
    PopupUI.setRecentSearchQueryUI(recentSearch.searchQuery);
    PopupUI.toggleRecentSearchLabel();
    PopupUI.initRabbitHoleOnClickStartButton();
  }

  if (rabbitHole) {
    rabbitHole?.history.forEach((history: History) => {
      PopupUI.setRabbitHoleHistoryItemUI(history);
    });
    PopupUI.setCurrentRabbitHoleGoalValueUI(rabbitHole.query);
  } else {
    PopupUI.setCurrentRabbitHoleGoalValueUI(
      currentRabbitHoleGoalValueInitialText
    );
  }
};

const initSetting = async () => {
  await SettingUI.init();
  await initSubmitSettingButton();
  addEnterEventToSubmitButton();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", async () => {
    await initPopup();
    await initSetting();
  });
} else {
  (async () => {
    await initPopup();
    await initSetting();
  })();
}
