import { History, RabbitHole } from "./chromeApi/chromeLocalData";
import ChromeStorage from "./chromeApi/storageData";
import { initRabbitHole } from "./rabbltHole";

class Popup {
  private searchStatusElement: HTMLElement | null = null;
  private startButton: HTMLButtonElement | null = null;
  private statusText: HTMLElement | null = null;
  private rabbitHole: RabbitHole | null = null;
  private recentSearch: History | null = null;

  constructor() {
    this.initPopup();
  }

  private getPopupElements() {
    this.searchStatusElement = document.getElementById("searchStatus");
    this.startButton = document.getElementById(
      "startButton"
    ) as HTMLButtonElement;
    this.statusText = document.getElementById("statusText");
  }

  private async setSearchStatusElement() {
    const recentSearch = await ChromeStorage.get("recentSearch");

    if (!recentSearch) {
      if (this.searchStatusElement) {
        this.searchStatusElement.innerHTML =
          "검색 페이지에서 검색을 먼저 수행해주세요.";
      }
      return;
    } else {
      if (this.searchStatusElement) {
        this.searchStatusElement.innerHTML = recentSearch.searchQuery!;
      }
    }
  }

  private initPopup() {
    this.getPopupElements();

    this.startButton?.addEventListener("click", () => {
      initRabbitHole(this.recentSearch?.searchQuery || "", () => {
        this.statusText!.innerHTML = "새로운 Rabbit Hole이 저장되었습니다.";

        setTimeout(() => {
          this.statusText!.innerHTML = "";
        }, 1000);
      });
    });

    this.setSearchStatusElement();
  }
}

// DOMContentLoaded 이벤트를 통해 클래스 인스턴스 생성
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => new Popup());
} else {
  new Popup(); // DOM이 이미 로드된 경우 즉시 실행
}
