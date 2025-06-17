import ChromeStorage from "../../chromeApi/storageData";
import {
  hiddenClass,
  slideInBottomAnimation,
  slideOutBottomAnimation,
} from "../constants";
import RabbitHoleDepth from "../rabbitHole/depth";
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
    const maxHoleDepth = await RabbitHoleDepth.getMaxDepth();

    SettingElements.rabbitHoleDepthInput.setValue(maxHoleDepth.toString());
  }
}

export default SettingUI;
