import {
  hiddenClass,
  slideInBottomAnimation,
  slideOutBottomAnimation,
} from "../constants";
import SettingElements from "./settingElements";

class SettingUI {
  static init() {
    SettingUI.addSettingOpenAndCloseEvent();
  }

  static addSettingOpenAndCloseEvent() {
    SettingElements.settingOpenButton.addEvent("click", () => {
      SettingUI.toggleSettingContainer();
    });

    SettingElements.settingCloseButton.addEvent("click", () => {
      SettingUI.toggleSettingContainer();
    });
  }

  static toggleSettingContainer() {
    SettingElements.settingContainer.toggleClass(hiddenClass);
    SettingElements.settingContainer.toggleClass(slideInBottomAnimation);
    SettingElements.settingContainer.toggleClass(slideOutBottomAnimation);
  }
}

export default SettingUI;
