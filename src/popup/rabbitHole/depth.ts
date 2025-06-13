import ChromeStorage from "../../chromeApi/storageData";
import PopupElements from "../popupElements";

class RabbitHoleDepth {
  static async getCurrentDepth() {
    const rabbitHole = await ChromeStorage.get("rabbitHole");
    return rabbitHole.holeDepth;
  }

  static async getMaxDepth() {
    const setting = await ChromeStorage.get("setting");
    return setting.maxHoleDepth;
  }

  static setRabbitHoleDepthUI(holeDepth: number | undefined) {
    PopupElements.rabbitHoleDepth.setText(`토끼굴 깊이: ${holeDepth || 0}`);
  }

  static async setCurrentRabbitHoleDepthUI() {
    const holeDepth = await RabbitHoleDepth.getCurrentDepth();
    PopupElements.currentRabbitHoleDepth.setText(holeDepth.toString());
  }

  static async setMaxRabbitHoleDepthUI() {
    const maxHoleDepth = await RabbitHoleDepth.getMaxDepth();
    PopupElements.maxRabbitHoleDepth.setText(maxHoleDepth.toString());
  }

  static async setDepthProgressUI() {
    const maxHoleDepth = await RabbitHoleDepth.getMaxDepth();
    const holeDepth = await RabbitHoleDepth.getCurrentDepth();
    const newDepthWidth = (100 * holeDepth) / maxHoleDepth;

    PopupElements.depthProgress.setStyle("width", `${newDepthWidth}%`);

    if (newDepthWidth >= 100) {
      PopupElements.depthProgress.addClass("depth-progress-max");
    }
  }
}

export default RabbitHoleDepth;
