import SettingElements from "./settingElements";
import SettingUI from "./settingUI";

class SettingEvents {
  static addSettingOpenAndCloseEvent() {
    SettingElements.settingOpenButton.addEvent("click", () => {
      SettingUI.toggleSettingContainer();
    });

    SettingElements.settingCloseButton.addEvent("click", () => {
      SettingUI.toggleSettingContainer();
    });
  }
}

export default SettingEvents;
