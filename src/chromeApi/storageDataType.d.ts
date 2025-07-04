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
}

interface Setting {
  maxHoleDepth: number;
}

interface History {}

export interface StorageData {
  recentSearch: Path;
  rabbitHole: RabbitHole;
  setting: Setting;
}
