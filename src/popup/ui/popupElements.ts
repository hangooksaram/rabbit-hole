import ElementWrapper from "../../ui/ElementWrapper";

const PopupElements = {
  currentRabbitHoleGoalValue: new ElementWrapper(
    document.getElementById("currentRabbitHoleGoalValue") as HTMLSpanElement
  ),
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
  createRabbitHoleImage: new ElementWrapper(
    document.getElementById("createRabbitHoleImage") as HTMLDivElement
  ),
  goalLabel: new ElementWrapper(
    document.getElementById("goalLabel") as HTMLSpanElement
  ),
  closeRabbitHoleButton: new ElementWrapper(
    document.getElementById("closeRabbitHoleButton") as HTMLButtonElement
  ),
};

export default PopupElements;
