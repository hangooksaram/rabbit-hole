type HistoryItem = Partial<{
  searchUrl: string;
  searchQuery: string;
  visitTime: number;
}>;

interface RabbitHole {
  searchUrl: string;
  holeDepth: number;
}

export interface StorageData {
  savedHistory: HistoryItem[];
  rabbitHole: RabbitHole;
}
