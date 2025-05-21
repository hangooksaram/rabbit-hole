interface History {
  searchUrl?: string;
  searchQuery?: string;
  visitTime?: number;
}

interface RabbitHole {
  query: string;
  holeDepth: number;
  history: History[];
}

export interface StorageData {
  recentSearch: History;
  rabbitHole: RabbitHole;
}
