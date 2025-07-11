import { Path, RabbitHole } from "../chromeApi/storageDataType";
import ChromeStorage from "../chromeApi/storageData";
import SettingController from "../setting/settingController";

export function initRabbitHole(query: string, cb?: () => void): void {
  const updatedRabbitHole: RabbitHole = {
    query,
    holeDepth: 0,
    path: [],
    percent: 0,
  };

  ChromeStorage.set("rabbitHole", { ...updatedRabbitHole }, cb);

  chrome.runtime.sendMessage(updatedRabbitHole.holeDepth.toString());
}

export function closeRabbitHole(cb?: () => void): void {
  ChromeStorage.remove("rabbitHole", cb);
}

const isUrlDuplicated = (searchUrl: string, savedPath: Path[]): boolean => {
  return savedPath.some((item) => item.searchUrl === searchUrl);
};

export async function saveRabbitHolePaths(newSearch: Path) {
  try {
    const rabbitHole = await ChromeStorage.get("rabbitHole");
    const maxHoleDepth = (await ChromeStorage.get("setting")).maxHoleDepth;

    const { searchUrl } = newSearch;

    const savedPath = rabbitHole.path || [];

    if (isUrlDuplicated(searchUrl!, savedPath)) {
      return;
    }

    savedPath.push(newSearch);

    await ChromeStorage.set("rabbitHole", {
      ...rabbitHole,
      path: savedPath,
      holeDepth: savedPath.length,
      percent: Math.floor((savedPath.length / maxHoleDepth) * 100),
    });
  } catch (error) {
    console.error("Error saving rabbit hole paths:", error);
  }
}

export async function getCurrentRabbitHoleDepth(): Promise<number> {
  try {
    const rabbitHole = await ChromeStorage.get("rabbitHole");
    return rabbitHole.holeDepth || 0;
  } catch (error) {
    return 0;
  }
}
