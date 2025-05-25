import ChromeStorage from "../chromeApi/storageData";
import { initRabbitHole } from "../rabbitHole/rabbitHole";
import PopupUI from "./ui/popupUI";

class Popup {
  constructor() {
    this.initPopup();
  }

  private async setRabbitHole() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    PopupUI.setRabbitHoleDepthUI(rabbitHole.holeDepth);

    rabbitHole.history.forEach(({ searchQuery }) => {
      PopupUI.setRabbitHoleHistoryItemUI(searchQuery);
    });
  }

  private async initPopup() {
    const recentSearch = await ChromeStorage.get("recentSearch");
    PopupUI.addStartButtonClickListener(() =>
      initRabbitHole(recentSearch?.searchQuery || "", () => {
        PopupUI.toastNewRabbitHole();
        PopupUI.initRabbitHoleUI();
        PopupUI.setRabbitHoleDepthUI(0);
      })
    );
    this.setRabbitHole();

    PopupUI.setRecentSearchQueryUI(recentSearch.searchQuery);
  }
}

// DOMContentLoaded 이벤트를 통해 클래스 인스턴스 생성
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new Popup());
} else {
  new Popup(); // DOM이 이미 로드된 경우 즉시 실행
}
