import ElementWrapper from "../ui/ElementWrapper";

const PopupElements = {
  recentSearch: new ElementWrapper(
    document.getElementById("recentSearch") as HTMLElement
  ),
  recentSearchBox: new ElementWrapper(
    document.getElementById("recentSearchBox") as HTMLElement
  ),
  recentSearchText: new ElementWrapper(
    document.getElementById("recentSearchText") as HTMLDivElement
  ),
  recentSearchLabel: new ElementWrapper(
    document.getElementById("recentSearchLabel") as HTMLSpanElement
  ),
  rabbitHolePath: new ElementWrapper(
    document.getElementById("rabbitHolePath") as HTMLUListElement
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
  depthProgressStatus: new ElementWrapper(
    document.getElementById("depthProgressStatus") as HTMLSpanElement
  ),
  currentRabbitHoleGoalValue: new ElementWrapper(
    document.getElementById("currentRabbitHoleGoalValue") as HTMLSpanElement
  ),

  goalLabel: new ElementWrapper(
    document.getElementById("goalLabel") as HTMLSpanElement
  ),
  closeRabbitHoleLabel: new ElementWrapper(
    document.getElementById("closeRabbitHoleLabel") as HTMLSpanElement
  ),
  closeRabbitHoleButton: new ElementWrapper(
    document.getElementById("closeRabbitHoleButton") as HTMLButtonElement
  ),
};

export default PopupElements;
