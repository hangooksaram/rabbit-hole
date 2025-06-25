import { setBadgeConditional } from "../../badge/badge";
import ChromeStorage from "../../chromeApi/storageData";
import toast from "../../ui/toast";
import { saveErrorText, saveSuccessText } from "../constants";
import PopupUI from "../popupUI";
import SettingElements from "./settingElements";
import SettingUI from "./settingUI";

export const initSubmitSettingButton = async () => {
  SettingElements.submitSetting.addEvent("click", async (event) => {
    try {
      const rabbitHoleDepth = SettingElements.rabbitHoleDepthInput.getValue();
      event.preventDefault();

      await ChromeStorage.set("setting", {
        maxHoleDepth: Number(rabbitHoleDepth),
      });

      await PopupUI.setRabbitHoleDepthUI();
      await setBadgeConditional();
      toast(saveSuccessText);
    } catch (error) {
      console.error("Error saving settings:", error);
      toast(saveErrorText);
    } finally {
    }
  });
};

export const setSettingLabelTexts = () => {
  SettingUI.setSubmitSettingButtonText();
  SettingUI.setSettingLabelText();
  SettingUI.setSettingItemLabelText();
};

export const addEnterEventToSubmitButton = () => {
  SettingElements.rabbitHoleDepthInput.addEvent("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      SettingElements.submitSetting.click();
    }
  });
};
