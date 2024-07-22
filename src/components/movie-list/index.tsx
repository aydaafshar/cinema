import React from "react";
import MovieCrad from "../movie-card";
import { Movie } from "../../types/Movie";
import "./style.css";
type MovieListProps = {
  movies: Pick<Movie, "id" | "image" | "name">[];
  onItemClick: (id: number) => void;
};
export const MovieList: React.FC<MovieListProps> = ({
  movies,
  onItemClick,
}) => {
  return (
    <div className="movieList">
      {movies.map((movie) => {
        return (
          <MovieCrad
            key={movie.id}
            name={movie.name}
            image={movie.image}
            onClick={() => onItemClick(movie.id)}
          />
        );
      })}
    </div>
  );
};
