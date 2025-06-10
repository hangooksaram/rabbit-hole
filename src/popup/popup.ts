import ChromeStorage from "../chromeApi/storageData";
import { History, RabbitHole } from "../chromeApi/storageDataType";
import PopupUI from "./ui/popupUI";

const renderPopup = (recentSearch?: History, rabbitHole?: RabbitHole) => {
  PopupUI.setRecentSearchQueryUI(recentSearch?.searchQuery);

  if (recentSearch) {
    PopupUI.toggleRecentSearchLabel();
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
  PopupUI.initSetting();
};

// DOMContentLoaded 이후에 팝업 초기화
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPopup);
} else {
  initPopup();
}
