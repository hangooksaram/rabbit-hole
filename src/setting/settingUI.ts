import RabbitHoleDepth from "../rabbitHole/depth";
import {
  hiddenClass,
  rabbitHoleDepthLabelText,
  saveText,
  settingText,
  slideInBottomAnimation,
  slideOutBottomAnimation,
} from "../popup/constants";
import SettingElements from "./settingElements";
import SettingEvents from "./settingEvents";
import { getMaxRabbitHoleDepth } from "./setting";

class SettingUI {
  static async init() {
    SettingEvents.addSettingOpenAndCloseEvent();
    await SettingUI.setMaxRabbitHoleDepthInputInitialValue();
  }

  static toggleSettingContainer() {
    SettingElements.settingContainer.toggleClass(hiddenClass);
    SettingElements.settingContainer.toggleClass(slideInBottomAnimation);
    SettingElements.settingContainer.toggleClass(slideOutBottomAnimation);
  }

  static async setMaxRabbitHoleDepthInputInitialValue() {
    const maxHoleDepth = await getMaxRabbitHoleDepth();

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
