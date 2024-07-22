import "./style.css";

type Props = {
  href: string;
};

export const BtnLink: React.FC<Props> = ({ href }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="playBtn"
      >
        PLAY
      </a>
    </div>
  );
};
