import ChromeStorage from "../../chromeApi/storageData";
import Setting from "../../setting/setting";
import RabbitHoleDepth from "./rabbitHoleDepth";

class RabbitHoleDepthController {
  static async getCurrentDepth() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    return rabbitHole ? rabbitHole.holeDepth : 0;
  }

  static async getCurrentDepthPercentage() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    return rabbitHole ? rabbitHole.percent : 0;
  }

  static async getRabbitHoleDepthsAndPercentage() {
    const currentPercent =
      await RabbitHoleDepthController.getCurrentDepthPercentage();
    const currentHoleDepth = await RabbitHoleDepthController.getCurrentDepth();
    const maxHoleDepth = await Setting.Controller.getMaxRabbitHoleDepth();

    return {
      currentPercent,
      currentHoleDepth,
      maxHoleDepth,
    };
  }
}

export default RabbitHoleDepthController;
