import ChromeStorage from "../chromeApi/storageData";
import { History, RabbitHole } from "../chromeApi/storageDataType";
import { currentRabbitHoleGoalValueInitialText } from "./constants";
import PopupUI from "./popupUI";
import {
  addEnterEventToSubmitButton,
  initSubmitSettingButton,
  setSettingLabelTexts,
} from "./setting/setting";
import SettingUI from "./setting/settingUI";

const initPopup = async () => {
  const recentSearch: History = await ChromeStorage.get("recentSearch");
  const rabbitHole: RabbitHole = await ChromeStorage.get("rabbitHole");

  await PopupUI.setRabbitHoleDepthUI();

  PopupUI.setRecentSearchQueryUI(recentSearch?.searchQuery);
  initLableTexts();

  if (recentSearch) {
    PopupUI.addToggleRecentSearchContentEvent();
    PopupUI.addRabbitHoleStartButtonClickEvent();
  }

  if (rabbitHole) {
    rabbitHole?.history.forEach((history: History) => {
      PopupUI.setRabbitHoleHistoryItemUI(history);
    });
    PopupUI.setCurrentRabbitHoleGoalValueUI(rabbitHole.query);
    PopupUI.showCloseRabbitHoleButton();
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
