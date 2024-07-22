import { Movie } from "../../types/Movie";

import "./style.css";
import { Image } from "../../types/Image";
import { useState } from "react";
import { ImageCarousel } from "../image-carousel";
import { MovieHeaderDetailComponent } from "../movie-header-detaills";
import { MovieSummary } from "../movie-summary";
import { BtnLink } from "../btn-link";
type Props = {
  movie: Pick<
    Movie,
    | "image"
    | "name"
    | "genres"
    | "language"
    | "rating"
    | "summary"
    | "externals"
  >;
  images: Image[];
};

export const MovieDetail: React.FC<Props> = ({ movie, images }) => {
  const [idx, setIdx] = useState(0);

  const prevClick = () => {
    setIdx((prevIdx) => {
      if (prevIdx === 0) return images.length - 1;
      return prevIdx - 1;
    });
  };
  const nextClick = () => {
    setIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  return (
    <div className="movie-details">
      <ImageCarousel
        images={images}
        idx={idx}
        prevClick={prevClick}
        nextClick={nextClick}
      />
      <div className="details">
        <MovieHeaderDetailComponent
          name={movie.name}
          rating={movie.rating}
          genres={movie.genres}
          language={movie.language}
        />

        <MovieSummary summary={movie.summary} />
      </div>

      <BtnLink href={`https://www.imdb.com/title/${movie.externals.imdb}`} />
    </div>
  );
};
