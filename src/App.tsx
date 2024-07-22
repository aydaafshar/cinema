import { MovieDetailsPage } from "./pages/movie-detail-page";

import { MovieListPage } from "./pages/movie-list-page";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
