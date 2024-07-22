import { Image } from "../../types/Image";
import { Button } from "../btn";
import "./style.css";

type Props = {
  images: Image[];
  idx: number;
  prevClick: () => void;
  nextClick: () => void;
};

export const ImageCarousel: React.FC<Props> = ({
  images,
  idx,
  prevClick,
  nextClick,
}) => {
  return (
    <div
      className="images"
      style={{
        backgroundImage: `url(${images[idx].resolutions.original.url})`,
      }}
    >
      <Button onClick={prevClick} className="btn prev" text="-" />
      <Button onClick={nextClick} className="btn next" text="+" />
    </div>
  );
};
