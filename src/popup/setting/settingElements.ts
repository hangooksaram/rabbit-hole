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
};

export default SettingElements;
