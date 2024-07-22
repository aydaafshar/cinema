import { Movie } from "../../types/Movie";
import "./style.css";

type Props = Pick<Movie, "name" | "genres" | "language" | "rating">;

export const MovieHeaderDetailComponent: React.FC<Props> = ({
  name,
  genres,
  language,
  rating,
}) => {
  return (
    <div className="header-details">
      <h1 className="h">{name}</h1>
      <h3 className="h">rating : {rating.average}</h3>
      <h2 className="h">language : {language}</h2>
      <h5 className="h">genres : {genres.join(",")}</h5>
    </div>
  );
};
