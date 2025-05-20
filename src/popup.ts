import { getSavedHistory, StorageData } from "./saveHistory";

// 시간 형식화 함수
function formatTime(timestamp: number) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPopup);
} else {
  initPopup(); // DOM이 이미 로드된 경우 즉시 실행
}

function initPopup() {
  const searchStatusElement = document.getElementById("searchStatus");
  const startButton = document.getElementById(
    "startButton"
  ) as HTMLButtonElement;
  const statusText = document.getElementById("statusText");

  getSavedHistory((data: StorageData) => {
    const savedHistory = data.savedHistory || [];

    if (
      searchStatusElement === null ||
      startButton === null ||
      statusText === null
    ) {
      console.error("Element not found");
      return;
    }

    if (savedHistory.length > 0) {
      searchStatusElement!.innerHTML = `
        <strong>최근 검색어:</strong> ${
          savedHistory[savedHistory.length - 1].searchQuery
        }<br>
        <small>${formatTime(
          savedHistory[savedHistory.length - 1].visitTime!
        )}</small>
      `;
      startButton!.disabled = false;
    } else {
      searchStatusElement!.innerHTML =
        "검색 페이지에서 검색을 먼저 수행해주세요.";
    }
  });
}
