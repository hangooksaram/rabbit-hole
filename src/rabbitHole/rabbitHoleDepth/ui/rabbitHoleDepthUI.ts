import {
  depthProgressStatusCheckPoints,
  depthProgressStatusText,
} from "../../../popup/constants";
import { isFull, isInCheckPointRange, isInRange } from "../calculateProgress";
import RabbitHoleDepthElements from "./rabbitHoleDepthElements";

class RabbitHoleDepthUI {
  static setDepthProgressStatusTextUI(percent: number) {
    for (let i = depthProgressStatusCheckPoints.length; i > 0; i--) {
      const checkPoint = depthProgressStatusCheckPoints[i - 1];

      if (isFull(percent)) {
        RabbitHoleDepthElements.depthProgressStatus.setText(
          depthProgressStatusText[100]
        );
        return;
      }

      if (isInCheckPointRange(percent, checkPoint)) {
        RabbitHoleDepthElements.depthProgressStatus.setText(
          depthProgressStatusText[checkPoint]
        );
        return;
      }
    }
  }

  static setCurrentRabbitHoleDepthTextUI(holeDepth: number, percent: number) {
    RabbitHoleDepthElements.currentRabbitHoleDepth.setText(
      holeDepth.toString()
    );

    if (percent >= 100) {
      RabbitHoleDepthElements.currentRabbitHoleDepth.setStyle(
        "color",
        "var(--primary-color-deep)"
      );
    } else if (
      RabbitHoleDepthElements.currentRabbitHoleDepth.isPropertySet("color")
    ) {
      RabbitHoleDepthElements.currentRabbitHoleDepth.removeStyle("color");
    }
  }

  static setMaxRabbitHoleDepthTextUI(maxHoleDepth: number) {
    RabbitHoleDepthElements.maxRabbitHoleDepth.setText(maxHoleDepth.toString());
  }

  static setDepthProgressBarUI(currentDepthPercentage: number) {
    RabbitHoleDepthElements.depthProgress.setStyle(
      "width",
      `${currentDepthPercentage}%`
    );

    if (currentDepthPercentage >= 100) {
      RabbitHoleDepthElements.depthProgress.addClass("depth-progress-max");
    } else if (
      RabbitHoleDepthElements.depthProgress.hasClass("depth-progress-max")
    ) {
      RabbitHoleDepthElements.depthProgress.removeClass("depth-progress-max");
    }
  }

  static setAllRabbitHoleDepthUIs({
    currentPercent,
    currentHoleDepth,
    maxHoleDepth,
  }: {
    currentPercent?: number;
    currentHoleDepth?: number;
    maxHoleDepth?: number;
  }) {
    RabbitHoleDepthUI.setMaxRabbitHoleDepthTextUI(maxHoleDepth || 0);
    RabbitHoleDepthUI.setCurrentRabbitHoleDepthTextUI(
      currentHoleDepth || 0,
      currentPercent || 0
    );
    RabbitHoleDepthUI.setDepthProgressBarUI(currentPercent || 0);
    RabbitHoleDepthUI.setDepthProgressStatusTextUI(currentPercent || 0);
  }
}

export default RabbitHoleDepthUI;
