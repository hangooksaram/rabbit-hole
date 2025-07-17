import { depthProgressStatusText } from "../../popup/constants";

export const isInRange = (percent: number, checkPoint: number) => {
  return (
    percent >= Number(checkPoint) && Math.abs(percent - Number(checkPoint)) < 25
  );
};

export const isFull = (percent: number) => {
  return percent === 100;
};

export const isInCheckPointRange = (
  percent: number,
  checkPoint: keyof typeof depthProgressStatusText
) => {
  console.log(percent, checkPoint);
  return percent >= Number(checkPoint);
};

export function calculateCurrentPercentage(
  currentDepth: number,
  maxDepth: number
): number {
  if (maxDepth === 0) return 0;
  return Math.floor((currentDepth / maxDepth) * 100);
}
