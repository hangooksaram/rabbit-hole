import Setting from "./setting";
import SettingElements from "./ui/settingElements";

class SettingEvents {
  static addSettingOpenAndCloseEvent() {
    SettingElements.settingOpenButton.addEvent("click", () => {
      Setting.UI.toggleSettingContainer();
    });

    SettingElements.settingCloseButton.addEvent("click", () => {
      Setting.UI.toggleSettingContainer();
    });
  }
}

export default SettingEvents;
