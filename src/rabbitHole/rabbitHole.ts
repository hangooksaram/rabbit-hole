import { Path, RabbitHole } from "../chromeApi/storageDataType";
import ChromeStorage from "../chromeApi/storageData";
import { calculateCurrentPercentage } from "./rabbitHoleDepth/calculateProgress";

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

export const updateRabbitHole = async (
  updatedRabbitHole: Partial<RabbitHole>
) => {
  const originalRabbitHole = await ChromeStorage.get("rabbitHole");

  await ChromeStorage.set("rabbitHole", {
    ...originalRabbitHole,
    ...updatedRabbitHole,
  });
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

    await updateRabbitHole({
      path: savedPath,
      holeDepth: savedPath.length,
      percent: calculateCurrentPercentage(savedPath.length, maxHoleDepth),
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
