import {
  hiddenClass,
  slideInBottomAnimation,
  slideOutBottomAnimation,
} from "../constants";
import SettingElements from "./settingElements";

class SettingUI {
  static init() {
    SettingElements.settingOpenButton.addEvent("click", () => {
      SettingElements.settingContainer.toggleClass(hiddenClass);
      SettingElements.settingContainer.toggleClass(slideInBottomAnimation);
      SettingElements.settingContainer.toggleClass(slideOutBottomAnimation);
    });

    SettingElements.settingCloseButton.addEvent("click", () => {
      SettingElements.settingContainer.toggleClass(slideInBottomAnimation);
      SettingElements.settingContainer.toggleClass(slideOutBottomAnimation);
      SettingElements.settingContainer.toggleClass(hiddenClass);
    });
  }
}

export default SettingUI;
