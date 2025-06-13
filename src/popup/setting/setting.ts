import { setBadgeConditional } from "../../badge/badge";
import ChromeStorage from "../../chromeApi/storageData";
import toast from "../../ui/toast";
import PopupUI from "../popupUI";
import SettingElements from "./settingElements";

export const initSubmitSettingButton = async () => {
  SettingElements.submitSetting.addEvent("click", async (event) => {
    const rabbitHoleDepth = SettingElements.rabbitHoleDepthInput.getValue();
    event.preventDefault();

    await ChromeStorage.set("setting", {
      maxHoleDepth: Number(rabbitHoleDepth),
    });

    await PopupUI.RabbitHoleDepth.setMaxRabbitHoleDepthUI();
    await PopupUI.RabbitHoleDepth.setDepthProgressUI();
    await setBadgeConditional();
    toast("저장이 완료되었습니다.");
  });
};
