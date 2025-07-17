import ElementWrapper from "../../../ui/ElementWrapper";

const RabbitHoleDepthElements = {
  currentRabbitHoleDepth: new ElementWrapper(
    document.getElementById("currentRabbitHoleDepth") as HTMLSpanElement
  ),
  maxRabbitHoleDepth: new ElementWrapper(
    document.getElementById("maxRabbitHoleDepth") as HTMLSpanElement
  ),
  depthProgress: new ElementWrapper(
    document.getElementById("depthProgress") as HTMLDivElement
  ),
  depthProgressStatus: new ElementWrapper(
    document.getElementById("depthProgressStatus") as HTMLSpanElement
  ),
};

export default RabbitHoleDepthElements;
