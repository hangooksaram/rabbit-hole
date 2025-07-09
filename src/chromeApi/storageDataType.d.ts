interface Path {
  searchUrl?: string;
  searchQuery?: string;
  searchEngine?: string;
  visitTime?: number;
}

interface RabbitHole {
  query: string;
  holeDepth: number;
  path: Path[];
  percent: number;
}

interface Setting {
  maxHoleDepth: number;
}

export interface StorageData {
  recentSearch: Path;
  rabbitHole: RabbitHole;
  setting: Setting;
  history: RabbitHole[];
}
