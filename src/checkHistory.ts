const historyState = window.history.state;
chrome.runtime.sendMessage(historyState);
