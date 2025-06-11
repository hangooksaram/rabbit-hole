interface History {
  searchUrl?: string;
  searchQuery?: string;
  searchEngine?: string;
  visitTime?: number;
}

interface RabbitHole {
  query: string;
  holeDepth: number;
  history: History[];
}

interface Setting {
  maxHoleDepth: number;
}

export interface StorageData {
  recentSearch: History;
  rabbitHole: RabbitHole;
  setting: Setting;
}
