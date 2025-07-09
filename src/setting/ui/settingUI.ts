import {
  hiddenClass,
  rabbitHoleDepthLabelText,
  saveText,
  settingText,
  slideInBottomAnimation,
  slideOutBottomAnimation,
} from "../../popup/constants";
import SettingElements from "./settingElements";
import Setting from "../setting";

class SettingUI {
  static async init() {
    Setting.Events.addSettingOpenAndCloseEvent();
    await Setting.UI.setMaxRabbitHoleDepthInputInitialValue();
  }

  static toggleSettingContainer() {
    SettingElements.settingContainer.toggleClass(hiddenClass);
    SettingElements.settingContainer.toggleClass(slideInBottomAnimation);
    SettingElements.settingContainer.toggleClass(slideOutBottomAnimation);
  }

  static async setMaxRabbitHoleDepthInputInitialValue() {
    const maxHoleDepth = await Setting.Controller.getMaxRabbitHoleDepth();

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
