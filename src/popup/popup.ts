import ChromeStorage from "../chromeApi/storageData";
import { History, RabbitHole } from "../chromeApi/storageDataType";
import PopupUI from "./popupUI";
import { initSubmitSettingButton } from "./setting/setting";
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
      "아직 없어요. 새로운 토끼굴을 생성해 주세요!"
    );
  }
};

const initSetting = async () => {
  await SettingUI.init();
  await initSubmitSettingButton();
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
