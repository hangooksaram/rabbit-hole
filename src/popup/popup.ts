import ChromeStorage from "../chromeApi/storageData";
import { History, RabbitHole } from "../chromeApi/storageDataType";
import PopupUI from "./popupUI";
import { initSubmitSettingButton } from "./setting/setting";
import SettingUI from "./setting/settingUI";

const renderPopup = (recentSearch?: History, rabbitHole?: RabbitHole) => {
  PopupUI.setRecentSearchQueryUI(recentSearch?.searchQuery);
  PopupUI.RabbitHoleDepth.setMaxRabbitHoleDepthUI();
  PopupUI.RabbitHoleDepth.setCurrentRabbitHoleDepthUI();
  PopupUI.RabbitHoleDepth.setDepthProgressUI();

  if (recentSearch) {
    PopupUI.toggleRecentSearchLabel();
    PopupUI.initRabbitHoleOnClickStartButton();
  }

  if (rabbitHole) {
    rabbitHole?.history.forEach((history: History) => {
      PopupUI.setRabbitHoleHistoryItemUI(history);
    });
  }
};

const initPopup = async () => {
  const recentSearch: History = await ChromeStorage.get("recentSearch");
  const rabbitHole: RabbitHole = await ChromeStorage.get("rabbitHole");

  renderPopup(recentSearch, rabbitHole);
};

const initSetting = async () => {
  await SettingUI.init();
  initSubmitSettingButton();
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
