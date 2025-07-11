import {
  hiddenClass,
  rabbitHoleDepthLabelText,
  saveText,
  settingText,
  slideInBottomAnimation,
  slideOutBottomAnimation,
} from "../../popup/constants";
import SettingElements from "./settingElements";

class SettingUI {
  static toggleSettingContainer() {
    SettingElements.settingContainer.toggleClass(hiddenClass);
    SettingElements.settingContainer.toggleClass(slideInBottomAnimation);
    SettingElements.settingContainer.toggleClass(slideOutBottomAnimation);
  }

  static setMaxRabbitHoleDepthInputInitialValue(maxHoleDepth: string) {
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

  static setSettingLabelTexts = () => {
    SettingUI.setSubmitSettingButtonText();
    SettingUI.setSettingLabelText();
    SettingUI.setSettingItemLabelText();
  };
}

export default SettingUI;
