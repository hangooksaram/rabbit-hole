import { RabbitHole } from "../chromeApi/chromeLocalData";
import ChromeStorage from "../chromeApi/storageData";

export function initRabbitHole(query: string, cb?: () => void): void {
  const updatedRabbitHole: RabbitHole = { query, holeDepth: 0, history: [] };

  ChromeStorage.set("rabbitHole", { ...updatedRabbitHole }, cb);

  chrome.runtime.sendMessage("Hi!", (response) => {
    alert(response); // Yeah
    console.log(response); // Yeah
  });
}
