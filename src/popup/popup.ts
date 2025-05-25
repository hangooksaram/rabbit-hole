import ChromeStorage from "../chromeApi/storageData";
import PopupUI from "./ui/popupUI";

class Popup {
  constructor() {
    this.initPopup();
  }

  private async initPopup() {
    const recentSearch = await ChromeStorage.get("recentSearch");
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    PopupUI.setRabbitHoleDepthUI(rabbitHole.holeDepth);

    rabbitHole.history.forEach(({ searchQuery }) => {
      PopupUI.setRabbitHoleHistoryItemUI(searchQuery);
    });

    PopupUI.setRecentSearchQueryUI(recentSearch.searchQuery);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new Popup());
} else {
  new Popup();
}
