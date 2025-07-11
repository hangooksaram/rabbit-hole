import { setBadgeConditional } from "../badge/badge";
import ChromeStorage from "../chromeApi/storageData";
import { saveErrorText, saveSuccessText } from "../popup/constants";
import Popup from "../popup/popup";
import toast from "../ui/toast";
import Setting from "./setting";
import SettingElements from "./ui/settingElements";

class SettingEvents {
  static addSettingOpenAndCloseEvent() {
    SettingElements.settingOpenButton.addEvent("click", () => {
      Setting.UI.toggleSettingContainer();
    });

    SettingElements.settingCloseButton.addEvent("click", () => {
      Setting.UI.toggleSettingContainer();
    });
  }

  static addSettingButtonSubmitEvent() {
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
  }

  static addEnterEventToSubmitButton = () => {
    SettingElements.rabbitHoleDepthInput.addEvent("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        SettingElements.submitSetting.click();
      }
    });
  };
}

export default SettingEvents;
