export type Movies = {
  id: number;
  name: string;
  type?: string;
  language?: string;
  genres: string[];
  status?: string;
  runtime?: number;
  averageRuntime?: number;
  premiered: string;
  ended?: string;
  officialSite?: string;
  schedule?: {
    time: string;
    days: string[];
  };
  rating?: {
    average: number;
  };
  image?: {
    medium: string;
    original: string;
  };
  summary?: string;
};

export type SortOption =
  | "none"
  | "name-asc"
  | "name-desc"
  | "premiere-asc"
  | "premiere-desc";

export type FilterParams = {
  genres: string[];
  status: string;
  sortBy: SortOption;
};
