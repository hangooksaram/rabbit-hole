import ChromeStorage from "../chromeApi/storageData";
import { DEFAULT_RABBIT_HOLE_MAX_DEPTH } from "../rabbitHole/rabbit-hole-constants";

export const getMaxRabbitHoleDepth = async (): Promise<number> => {
  const setting = await ChromeStorage.get("setting");
  return setting.maxHoleDepth;
};
