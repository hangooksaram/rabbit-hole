import History from "./history/history";
import Popup from "./popup/popup";
import Setting from "./setting/setting";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", async () => {
    await Popup.Controller.initPopup();
    await Setting.Controller.initSetting();
    await History.Controller.initHistory();
  });
} else {
  (async () => {
    await Popup.Controller.initPopup();
    await Setting.Controller.initSetting();
    await History.Controller.initHistory();
  })();
}
