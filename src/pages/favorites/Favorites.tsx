import React from "react";
import { useFavorites } from "../../hooks/useFavorites";
import MovieGrid from "../../components/movies/MoviesGrid";

const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-container">
      {favorites.length > 0 ? (
        <MovieGrid movies={favorites} />
      ) : (
        <p>There is no movies yet!</p>
      )}
    </div>
  );
};

export default Favorites;