import { RabbitHole } from "../chromeApi/storageDataType";
import ChromeStorage from "../chromeApi/storageData";

export function initRabbitHole(query: string, cb?: () => void): void {
  const updatedRabbitHole: RabbitHole = { query, holeDepth: 0, history: [] };

  ChromeStorage.set("rabbitHole", { ...updatedRabbitHole }, cb);

  chrome.runtime.sendMessage(updatedRabbitHole.holeDepth.toString());
}
