import React from "react";
import { Movies } from "../../api/types";
import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.scss"

interface MovieGridProps {
  movies: Movies[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <div className={styles["movie-grid"]}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles["movie-card__container"]}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;