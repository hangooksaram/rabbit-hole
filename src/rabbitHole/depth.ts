import ChromeStorage from "../chromeApi/storageData";
import {
  depthProgressStatusCheckPoints,
  depthProgressStatusText,
} from "../popup/constants";
import PopupElements from "../popup/popupElements";
import { getMaxRabbitHoleDepth } from "../setting/setting";
import { DEFAULT_RABBIT_HOLE_MAX_DEPTH } from "./rabbit-hole-constants";

class RabbitHoleDepth {
  static async getCurrentDepth() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    return rabbitHole ? rabbitHole.holeDepth : 0;
  }

  static async getCurrentDepthPercentage() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    return rabbitHole ? rabbitHole.percent : 0;
  }

  static async setDepthProgressStatusUI() {
    const p = await RabbitHoleDepth.getCurrentDepthPercentage();

    const isFull = p === 100;

    for (let i = 0; i < depthProgressStatusCheckPoints.length; i++) {
      const checkPoint = depthProgressStatusCheckPoints[i];
      const isInRange = p <= Number(checkPoint);

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

    if (p <= Number(checkPoint)) {
      PopupElements.depthProgressStatus.setText(
        depthProgressStatusText[checkPoint]
      );
      return;
    }
  }

  static async setCurrentRabbitHoleDepthUI() {
    const holeDepth = await RabbitHoleDepth.getCurrentDepth();
    const p = await RabbitHoleDepth.getCurrentDepthPercentage();
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
    const maxHoleDepth = await getMaxRabbitHoleDepth();
    PopupElements.maxRabbitHoleDepth.setText(maxHoleDepth.toString());
  }

  static async setDepthProgressUI() {
    const currentDepthPercentage =
      await RabbitHoleDepth.getCurrentDepthPercentage();
    PopupElements.depthProgress.setStyle("width", `${currentDepthPercentage}%`);

    if (currentDepthPercentage >= 100) {
      PopupElements.depthProgress.addClass("depth-progress-max");
    } else if (PopupElements.depthProgress.hasClass("depth-progress-max")) {
      PopupElements.depthProgress.removeClass("depth-progress-max");
    }
  }
}

export default RabbitHoleDepth;
