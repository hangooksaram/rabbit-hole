export function initRabbitHole(query: string, cb?: () => void): void {
  const updatedRabbitHole = { query, holeDepth: 0, history: [] };

  chrome.storage.local.set({ rabbitHole: { ...updatedRabbitHole } }, () => {
    if (cb) cb();
  });
}
