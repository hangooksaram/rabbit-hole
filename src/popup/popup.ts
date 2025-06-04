import ChromeStorage from "../chromeApi/storageData";
import { History, RabbitHole } from "../chromeApi/storageDataType";
import PopupUI from "./ui/popupUI";

export class Popup {
  private recentSearch: History | undefined;
  private rabbitHole: RabbitHole | undefined;
  constructor() {
    (async () => {
      await this.getStorageData();
    })();
    document.onload = () => {
      this.initPopup();
    };
  }

  async getStorageData() {
    this.recentSearch = await ChromeStorage.get("recentSearch");
    this.rabbitHole = await ChromeStorage.get("rabbitHole");
  }

  initConditions() {
    return {
      canAddButtonEvent: this.recentSearch && this.recentSearch.searchQuery,
      canSetRabbitHoleHistoryItemUI:
        this.rabbitHole && this.rabbitHole.history.length > 0,
    };
  }

  private async initPopup() {
    PopupUI.setRecentSearchQueryUI(this.recentSearch?.searchQuery);

    if (this.initConditions().canAddButtonEvent) {
      PopupUI.toggleRecentSearchLabel();
    }

    if (this.initConditions().canSetRabbitHoleHistoryItemUI) {
      this.rabbitHole?.history.forEach(({ searchQuery }) => {
        PopupUI.setRabbitHoleHistoryItemUI(searchQuery);
      });
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new Popup());
} else {
  new Popup();
}
