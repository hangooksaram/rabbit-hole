import ElementWrapper from "../ui/ElementWrapper";

const HistoryElements = {
  historyOpenButton: new ElementWrapper(
    document.getElementById("historyOpenButton") as HTMLImageElement
  ),
  historyCloseButton: new ElementWrapper(
    document.getElementById("historyCloseButton") as HTMLImageElement
  ),
  historyContainer: new ElementWrapper(
    document.getElementById("historyContainer") as HTMLDivElement
  ),
  hisotryLabel: new ElementWrapper(
    document.getElementById("historyLabel") as HTMLDivElement
  ),
};

export default HistoryElements;
