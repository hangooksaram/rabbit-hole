import ElementWrapper from "../../ui/ElementWrapper";

const SettingElements = {
  settingContainer: new ElementWrapper(
    document.getElementById("settingContainer") as HTMLDivElement
  ),
  settingOpenButton: new ElementWrapper(
    document.getElementById("settingOpenButton") as HTMLImageElement
  ),
  settingCloseButton: new ElementWrapper(
    document.getElementById("closeSettingButton") as HTMLImageElement
  ),
  rabbitHoleDepthInput: new ElementWrapper(
    document.getElementById("rabbitHoleDepthInput") as HTMLInputElement
  ),
  submitSetting: new ElementWrapper(
    document.getElementById("submit-setting") as HTMLButtonElement
  ),
  settingLabel: new ElementWrapper(
    document.getElementById("settingLabel") as HTMLDivElement
  ),
  settingItemLabel: new ElementWrapper(
    document.getElementById("settingItemLabel") as HTMLLabelElement
  ),
};

export default SettingElements;
