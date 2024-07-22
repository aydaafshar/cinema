import React from "react";
import { Movie } from "../../types/Movie";
import "./style.css";
type Props = Pick<Movie, "image" | "name"> & { onClick: () => void };
//todo: navigate to movie deatils first with link component and then with usenavigate with onclick
const MovieCrad: React.FC<Props> = ({ name, image, onClick }) => {
  return (
    <div className="movie">
      {/* <Link to={`/movies/${id}`}> */}

      {image ? (
        <img className="img" src={image?.medium} alt={name} onClick={onClick} />
      ) : null}
      {/* </Link> */}
      <h3 className="name">{name}</h3>
    </div>
  );
};

export default MovieCrad;
