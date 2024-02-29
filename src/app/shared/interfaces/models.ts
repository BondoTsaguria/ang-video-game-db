export interface Game {
  id: string;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  description: string;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}
interface ParentPlatform {
  platform: {
    slug: string;
    name: string;
  };
}
interface Publishers {
  name: string;
}

interface Rating {
  id: number;
  title: string;
  count: number;
}
