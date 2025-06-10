import ElementWrapper from "../ui/ElementWrapper";

const PopupElements = {
  recentSearch: new ElementWrapper(
    document.getElementById("recentSearch") as HTMLElement
  ),
  recentSearchContainer: new ElementWrapper(
    document.getElementById("recentSearchContainer") as HTMLElement
  ),
  recentSearchLabel: new ElementWrapper(
    document.getElementById("recentSearchLabel") as HTMLSpanElement
  ),
  statusText: new ElementWrapper(
    document.getElementById("statusText") as HTMLElement
  ),
  rabbitHoleHistory: new ElementWrapper(
    document.getElementById("rabbitHoleHistory") as HTMLUListElement
  ),
  rabbitHoleDepth: new ElementWrapper(
    document.getElementById("rabbitHoleDepth") as HTMLSpanElement
  ),
  createRabbitHoleImage: new ElementWrapper(
    document.getElementById("createRabbitHoleImage") as HTMLDivElement
  ),
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

export default PopupElements;
