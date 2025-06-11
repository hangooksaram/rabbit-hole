import { setBadgeConditional } from "../../badge/badge";
import ChromeStorage from "../../chromeApi/storageData";
import PopupUI from "../popupUI";
import SettingElements from "./settingElements";

export const initSubmitSettingButton = async () => {
  SettingElements.submitSetting.addEvent("click", async (event) => {
    const rabbitHoleDepth = SettingElements.rabbitHoleDepthInput.getValue();
    event.preventDefault();

    await ChromeStorage.set("setting", {
      maxHoleDepth: Number(rabbitHoleDepth),
    });

    await PopupUI.setMaxRabbitHoleDepthUI();
    await setBadgeConditional();
  });
};
