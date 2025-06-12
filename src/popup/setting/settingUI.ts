import ChromeStorage from "../../chromeApi/storageData";
import {
  hiddenClass,
  slideInBottomAnimation,
  slideOutBottomAnimation,
} from "../constants";
import SettingElements from "./settingElements";

class SettingUI {
  static async init() {
    SettingUI.addSettingOpenAndCloseEvent();
    await SettingUI.setMaxRabbitHoleDepthInputInitialValue();
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

  static async setMaxRabbitHoleDepthInputInitialValue() {
    const setting = await ChromeStorage.get("setting");

    SettingElements.rabbitHoleDepthInput.setValue(
      setting.maxHoleDepth.toString()
    );
  }
}

export default SettingUI;
