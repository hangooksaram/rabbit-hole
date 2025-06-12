import ChromeStorage from "../chromeApi/storageData";
import { History, RabbitHole } from "../chromeApi/storageDataType";
import PopupUI from "./popupUI";
import { initSubmitSettingButton } from "./setting/setting";
import SettingUI from "./setting/settingUI";

const renderPopup = (recentSearch?: History, rabbitHole?: RabbitHole) => {
  PopupUI.setRecentSearchQueryUI(recentSearch?.searchQuery);
  PopupUI.setMaxRabbitHoleDepthUI();
  PopupUI.setCurrentRabbitHoleDepthUI();

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
  await SettingUI.init();
  initSubmitSettingButton();
};

// DOMContentLoaded 이후에 팝업 초기화
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPopup);
} else {
  initPopup();
}
