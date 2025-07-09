import SettingController from "./settingController";
import SettingEvents from "./settingEvents";
import SettingUI from "./ui/settingUI";

class Setting {
  static UI = SettingUI;
  static Events = SettingEvents;
  static Controller = SettingController;
}

export default Setting;
