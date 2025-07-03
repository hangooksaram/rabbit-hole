import { Path } from "../chromeApi/storageDataType";
import ChromeStorage from "../chromeApi/storageData";

const isUrlDuplicated = (searchUrl: string, savedPath: Path[]): boolean => {
  return savedPath.some((item) => item.searchUrl === searchUrl);
};

export async function saveRabbitHoleHistories(newSearch: Path) {
  const { searchUrl } = newSearch;

  const rabbitHole = await ChromeStorage.get("rabbitHole");
  const savedPath = rabbitHole.path || [];

  if (isUrlDuplicated(searchUrl!, savedPath)) {
    return;
  }

  savedPath.push(newSearch);

  await ChromeStorage.set("rabbitHole", {
    ...rabbitHole,
    path: savedPath,
    holeDepth: savedPath.length,
  });
}
