import { History } from "../chromeApi/storageDataType";
import ChromeStorage from "../chromeApi/storageData";

const isUrlDuplicated = (
  searchUrl: string,
  savedHistory: History[]
): boolean => {
  return savedHistory.some((item) => item.searchUrl === searchUrl);
};

export async function saveRabbitHoleHistories(newSearch: History) {
  const { searchUrl } = newSearch;

  const rabbitHole = await ChromeStorage.get("rabbitHole");
  const savedHistory = rabbitHole.history || [];

  if (isUrlDuplicated(searchUrl!, savedHistory)) {
    return;
  }

  savedHistory.push(newSearch);

  await ChromeStorage.set("rabbitHole", {
    ...rabbitHole,
    history: savedHistory,
    holeDepth: savedHistory.length,
  });
}
