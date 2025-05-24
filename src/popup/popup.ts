import ChromeStorage from "../chromeApi/storageData";
import { initRabbitHole } from "../rabbitHole/rabbltHole";
import PopupElements from "./popupElements";

class Popup {
  private popupElements!: PopupElements;

  constructor() {
    this.popupElements = new PopupElements();
    this.initPopup();
  }

  private async setRecentSearch() {
    const recentSearch = await ChromeStorage.get("recentSearch");

    if (!recentSearch) {
      this.popupElements.setRecentSearchElement(
        "검색 페이지에서 검색을 먼저 수행해주세요."
      );
      return;
    }
    this.popupElements.setRecentSearchElement(recentSearch.searchQuery!);
  }

  private async setRabbitHole() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    rabbitHole.history.forEach((item) => {
      const historyElement = document.createElement("li");
      historyElement.innerHTML = item.searchQuery!;
      this.popupElements.appendRabbitHoleHistoryElement(historyElement);
      this.popupElements.setRabbitHoleDepthElement(rabbitHole.holeDepth!);
    });
  }

  private async setNewRabbitHole() {
    const recentSearch = await ChromeStorage.get("recentSearch");

    initRabbitHole(recentSearch?.searchQuery || "", () => {
      this.popupElements.setStatusTextElement(
        "새로운 Rabbit Hole이 저장되었습니다."
      );

      setTimeout(() => {
        this.popupElements.setStatusTextElement("");
      }, 1000);
    });
  }

  private initPopup() {
    this.popupElements.addStartButtonClickListener(() =>
      this.setNewRabbitHole()
    );
    this.setRabbitHole();

    this.setRecentSearch();
  }
}

// DOMContentLoaded 이벤트를 통해 클래스 인스턴스 생성
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new Popup());
} else {
  new Popup(); // DOM이 이미 로드된 경우 즉시 실행
}
