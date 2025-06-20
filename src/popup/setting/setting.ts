import { setBadgeConditional } from "../../badge/badge";
import ChromeStorage from "../../chromeApi/storageData";
import toast from "../../ui/toast";
import PopupUI from "../popupUI";
import SettingElements from "./settingElements";

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
      toast("저장이 완료되었습니다.");
    } catch (error) {
      console.error("Error saving settings:", error);
      toast("저장 중 오류가 발생했습니다.");
    } finally {
    }
  });
};

export const addEnterEventToSubmitButton = () => {
  SettingElements.rabbitHoleDepthInput.addEvent("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      SettingElements.submitSetting.click();
    }
  });
};
