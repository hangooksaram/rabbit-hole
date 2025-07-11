import ChromeStorage from "../chromeApi/storageData";
import Setting from "./setting";

class SettingController {
  static initSetting = async () => {
    const maxHoleDepth = await SettingController.getMaxRabbitHoleDepth();
    Setting.Events.addSettingOpenAndCloseEvent();
    Setting.UI.setMaxRabbitHoleDepthInputInitialValue(maxHoleDepth.toString());

    Setting.Events.addSettingButtonSubmitEvent();
    Setting.Events.addEnterEventToSubmitButton();
    Setting.UI.setSettingLabelTexts();
  };

  static getMaxRabbitHoleDepth = async (): Promise<number> => {
    const setting = await ChromeStorage.get("setting");
    return setting.maxHoleDepth;
  };
}

export default SettingController;
