import HistoryController from "./history/historyController";
import HistoryService from "./history/historyService";
import Popup from "./popup/popup";
import Setting from "./setting/setting";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", async () => {
    await Popup.Controller.initPopup();
    await Setting.Controller.initSetting();
    const historyService = new HistoryService(HistoryController);
    historyService.init();
  });
} else {
  (async () => {
    await Popup.Controller.initPopup();
    await Setting.Controller.initSetting();
    const historyService = new HistoryService(HistoryController);
    historyService.init();
  })();
}
