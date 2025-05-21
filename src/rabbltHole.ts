import { StorageData } from "./chromeApi/chromeLocalData";

export function initRabbitHole(searchUrl: string, holeDepth: number): void {
  const rabbitHole = {
    searchUrl,
    holeDepth,
  };

  chrome.storage.local.get<StorageData>("rabbitHole", (data) => {
    const existingRabbitHole = data.rabbitHole || {};

    chrome.storage.local.set(
      { rabbitHole: { ...existingRabbitHole, ...rabbitHole } },
      () => {
        console.log("Rabbit Hole saved:", rabbitHole);
      }
    );
  });
}
