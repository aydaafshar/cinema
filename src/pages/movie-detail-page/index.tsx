import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Movie } from "../../types/Movie";
import "./style.css";
import { MovieDetail } from "../../components/movie-details";
import { MovieList } from "../../components/movie-list";
import { Image } from "../../types/Image";
import { useState, useEffect } from "react";

export const MovieDetailsPage = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const params = useParams();
  const movies = useFetch<Movie[]>("https://api.tvmaze.com/shows");
  const movie = useFetch<Movie>(`https://api.tvmaze.com/shows/${params.id}`);
  const images = useFetch<Image[]>(
    `https://api.tvmaze.com/shows/${params.id}/images`
  );
  useEffect(() => {
    if (images === null) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images?.length]);

  if (movie === null || movies === null || images === null) {
    return <div>loading...</div>;
  }

  const moviesByGenere = movies?.filter((m) =>
    m.genres.some((x) => movie.genres.includes(x))
  );
  // const backgroundStyle : React.CSSProperties ={
  //  backgroundImage :`https://api.tvmaze.com/shows/${params.id}/images`;
  // }

  return (
    <div
      className="detail-page"
      style={{
        backgroundImage: `url(${images[currentIdx].resolutions.original.url})`,
      }}
    >
      <MovieDetail movie={movie} images={images} />
      <MovieList movies={moviesByGenere} onItemClick={() => {}} />
    </div>
  );
};
