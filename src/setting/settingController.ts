import { setBadgeConditional } from "../badge/badge";
import ChromeStorage from "../chromeApi/storageData";
import toast from "../ui/toast";
import { saveErrorText, saveSuccessText } from "../popup/constants";
import SettingElements from "./ui/settingElements";
import Popup from "../popup/popup";
import Setting from "./setting";

class SettingController {
  static initSubmitSettingButton = async () => {
    SettingElements.submitSetting.addEvent("click", async (event) => {
      try {
        const rabbitHoleDepth = SettingElements.rabbitHoleDepthInput.getValue();
        event.preventDefault();

        await ChromeStorage.set("setting", {
          maxHoleDepth: Number(rabbitHoleDepth),
        });

        await Popup.UI.setRabbitHoleDepthUI();
        await setBadgeConditional();
        toast(saveSuccessText);
      } catch (error) {
        console.error("Error saving settings:", error);
        toast(saveErrorText);
      } finally {
      }
    });
  };

  static setSettingLabelTexts = () => {
    Setting.UI.setSubmitSettingButtonText();
    Setting.UI.setSettingLabelText();
    Setting.UI.setSettingItemLabelText();
  };

  static addEnterEventToSubmitButton = () => {
    SettingElements.rabbitHoleDepthInput.addEvent("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        SettingElements.submitSetting.click();
      }
    });
  };

  static initSetting = async () => {
    await Setting.UI.init();
    await SettingController.initSubmitSettingButton();
    SettingController.addEnterEventToSubmitButton();
    SettingController.setSettingLabelTexts();
  };

  static getMaxRabbitHoleDepth = async (): Promise<number> => {
    const setting = await ChromeStorage.get("setting");
    return setting.maxHoleDepth;
  };
}

export default SettingController;
