import { useState } from "react";

import "./style.css";
type Props = { onSearch: (text: string) => void };
export const SearchHeader: React.FC<Props> = ({ onSearch }) => {
  const [item, setItem] = useState<string>("");

  const handleSearch = () => {
    onSearch(item);
  };

  return (
    <div className="header">
      <input
        data-testid="search-header-input"
        placeholder="find your movie"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button data-testid="search-header-button" onClick={handleSearch}>
        search
      </button>
    </div>
  );
};
