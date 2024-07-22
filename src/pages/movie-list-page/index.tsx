import { MovieList } from "../../components/movie-list";
import useFetch from "../../hooks/useFetch";
import { Movie } from "../../types/Movie";
import { SearchHeader } from "../../components/search-header";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { useState } from "react";

const SHOW_INDEX = "https://api.tvmaze.com/shows";
const SHOW_SEARCH = "https://api.tvmaze.com/search/shows";

export const MovieListPage = () => {
  const [text, setText] = useState<string>("");
  const isSearching = text.length > 0;

  const navigate = useNavigate();

  const indexMovies = useFetch<Movie[]>(SHOW_INDEX, isSearching);
  const searchMovies = useFetch<{ show: Movie }[]>(
    `${SHOW_SEARCH}?q=${text}`,
    !isSearching
  );
  if ((!isSearching && !indexMovies) || (isSearching && !searchMovies)) {
    return <div>loading...</div>;
  }
  let movies = indexMovies ?? [];

  if (isSearching && searchMovies) {
    movies = searchMovies.map((x) => x.show);
  }

  const onSearch = (t: string) => {
    setText(t);
  };

  const goToDetail = (id: number) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className="movie-list">
      <SearchHeader onSearch={onSearch} />

      <MovieList movies={movies} onItemClick={goToDetail} />
    </div>
  );
};
