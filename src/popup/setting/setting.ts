import ChromeStorage from "../../chromeApi/storageData";
import SettingElements from "./settingElements";

export const initSubmitSettingButton = () => {
  SettingElements.submitSetting.addEvent("click", (event) => {
    const rabbitHoleDepth = SettingElements.rabbitHoleDepthInput.getValue();
    event.preventDefault();

    ChromeStorage.set("setting", { maxHoleDepth: Number(rabbitHoleDepth) });
  });
};
