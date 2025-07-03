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
