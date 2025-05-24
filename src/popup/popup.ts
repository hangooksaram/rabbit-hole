import ChromeStorage from "../chromeApi/storageData";
import { initRabbitHole } from "../rabbitHole/rabbitHole";
import PopupUI from "./ui/popupUI";

class Popup {
  private popupUI!: PopupUI;

  constructor() {
    this.popupUI = new PopupUI();
    this.initPopup();
  }

  private async setRabbitHole() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    this.popupUI.setRabbitHoleDepthUI(rabbitHole.holeDepth);

    rabbitHole.history.forEach(({ searchQuery }) => {
      this.popupUI.setRabbitHoleHistoryItemUI(searchQuery);
    });
  }

  private async initPopup() {
    const recentSearch = await ChromeStorage.get("recentSearch");
    this.popupUI.addStartButtonClickListener(() =>
      initRabbitHole(recentSearch?.searchQuery || "", () => {
        this.popupUI.toastNewRabbitHole();
      })
    );
    this.setRabbitHole();

    this.popupUI.setRecentSearchQueryUI(recentSearch.searchQuery);
  }
}

// DOMContentLoaded 이벤트를 통해 클래스 인스턴스 생성
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new Popup());
} else {
  new Popup(); // DOM이 이미 로드된 경우 즉시 실행
}
