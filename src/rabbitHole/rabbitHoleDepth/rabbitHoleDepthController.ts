import ChromeStorage from "../../chromeApi/storageData";

class RabbitHoleDepthController {
  static async getCurrentDepth() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    return rabbitHole ? rabbitHole.holeDepth : 0;
  }

  static async getCurrentDepthPercentage() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");

    return rabbitHole ? rabbitHole.percent : 0;
  }
}

export default RabbitHoleDepthController;
