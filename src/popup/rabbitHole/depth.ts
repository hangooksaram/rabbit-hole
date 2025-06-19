import ChromeStorage from "../../chromeApi/storageData";
import { DEFAULT_RABBIT_HOLE_MAX_DEPTH } from "../../rabbitHole/rabbit-hole-constants";
import {
  depthProgressStatusCheckPoints,
  depthProgressStatusText,
} from "../constants";
import PopupElements from "../popupElements";

class RabbitHoleDepth {
  static async getCurrentDepth() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");
    return rabbitHole ? rabbitHole.holeDepth : 0;
  }

  static async getMaxDepth() {
    const setting = await ChromeStorage.get("setting");
    return setting.maxHoleDepth;
  }

  static async setDepthProgressStatusUI() {
    const p = await RabbitHoleDepth.calculateCurrentDepthPercentage();

    const isFull = p === 100;

    for (let i = 0; i < depthProgressStatusCheckPoints.length; i++) {
      const checkPoint = depthProgressStatusCheckPoints[i];
      const isInRange = p < Number(checkPoint);

      if (isFull || isInRange) {
        RabbitHoleDepth.setDepthProgressStatusTextConditional(p, checkPoint);

        return;
      }
    }
  }

  static setDepthProgressStatusTextConditional(
    p: number,
    checkPoint: keyof typeof depthProgressStatusText
  ) {
    if (p === 100) {
      PopupElements.depthProgressStatus.setText(depthProgressStatusText[100]);
      return;
    }

    if (p < Number(checkPoint)) {
      PopupElements.depthProgressStatus.setText(
        depthProgressStatusText[checkPoint]
      );
      return;
    }
  }

  static async setCurrentRabbitHoleDepthUI() {
    const holeDepth = await RabbitHoleDepth.getCurrentDepth();
    const p = await RabbitHoleDepth.calculateCurrentDepthPercentage();
    PopupElements.currentRabbitHoleDepth.setText(holeDepth.toString());

    if (p >= 100) {
      PopupElements.currentRabbitHoleDepth.setStyle(
        "color",
        "var(--primary-color-deep)"
      );
    } else if (PopupElements.currentRabbitHoleDepth.isPropertySet("color")) {
      PopupElements.currentRabbitHoleDepth.removeStyle("color");
    }
  }

  static async setMaxRabbitHoleDepthUI() {
    const maxHoleDepth = await RabbitHoleDepth.getMaxDepth();
    PopupElements.maxRabbitHoleDepth.setText(maxHoleDepth.toString());
  }

  static async calculateCurrentDepthPercentage() {
    const maxHoleDepth = await RabbitHoleDepth.getMaxDepth();
    const holeDepth = await RabbitHoleDepth.getCurrentDepth();
    const currentDepthPercentage = (100 * holeDepth) / maxHoleDepth;

    return currentDepthPercentage;
  }

  static async setDepthProgressUI() {
    const currentDepthPercentage =
      await RabbitHoleDepth.calculateCurrentDepthPercentage();

    PopupElements.depthProgress.setStyle("width", `${currentDepthPercentage}%`);

    if (currentDepthPercentage >= 100) {
      PopupElements.depthProgress.addClass("depth-progress-max");
    }
  }
}

export default RabbitHoleDepth;
