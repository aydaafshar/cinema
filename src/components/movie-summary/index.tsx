import sanitizeHtml from "sanitize-html";
import "./style.css";

type MovieSummaryProps = {
  summary: string;
};

export const MovieSummary: React.FC<MovieSummaryProps> = ({ summary }) => {
  return (
    <div className="summary-details">
      <h4>Summary:</h4>
      <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(summary) }}></p>
    </div>
  );
};
