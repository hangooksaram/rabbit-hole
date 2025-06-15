import ElementWrapper from "../ui/ElementWrapper";

const PopupElements = {
  recentSearch: new ElementWrapper(
    document.getElementById("recentSearch") as HTMLElement
  ),
  recentSearchContainer: new ElementWrapper(
    document.getElementById("recentSearchContainer") as HTMLElement
  ),
  recentSearchText: new ElementWrapper(
    document.getElementById("recentSearchText") as HTMLDivElement
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
  currentRabbitHoleDepth: new ElementWrapper(
    document.getElementById("currentRabbitHoleDepth") as HTMLSpanElement
  ),
  maxRabbitHoleDepth: new ElementWrapper(
    document.getElementById("maxRabbitHoleDepth") as HTMLSpanElement
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

  depthProgress: new ElementWrapper(
    document.getElementById("depthProgress") as HTMLDivElement
  ),
};

export default PopupElements;
