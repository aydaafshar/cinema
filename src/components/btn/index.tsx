import "./style.css";

type Props = {
  className: string;
  text: string;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ className, text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={className}>
        {text}
      </button>
    </>
  );
};
