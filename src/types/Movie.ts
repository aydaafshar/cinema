export interface Movie {
  url: string;
  id: number;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  language: string;
  genres: string[];
  rating: {
    average: number;
  };
  summary: string;
  externals: {
    imdb: number;
  };
}
