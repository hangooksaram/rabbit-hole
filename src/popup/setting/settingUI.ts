import ChromeStorage from "../../chromeApi/storageData";
import {
  hiddenClass,
  rabbitHoleDepthLabelText,
  saveText,
  settingText,
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

  static setSubmitSettingButtonText() {
    SettingElements.submitSetting.setText(saveText);
  }

  static setSettingLabelText() {
    SettingElements.settingLabel.setText(settingText);
  }

  static setSettingItemLabelText() {
    SettingElements.settingItemLabel.setText(rabbitHoleDepthLabelText);
  }
}

export default SettingUI;
