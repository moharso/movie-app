import React from "react";
import { Movies } from "../../../api/types";
import FavoriteButton from "../../common/FavoriteButton";
import { Link } from "react-router-dom";
import { useFavorites } from "../../../hooks/useFavorites";
import styles from "./MovieCard.module.scss";

interface MovieCardProps {
  movie: Movies;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (movieId: number, movie: Movies) => {
    toggleFavorite(movieId, movie);
  };

  return (
    <div className={styles["movie-card-container"]}>
      <Link to={`/movies/${movie.id}`} className={styles["movie-card-link"]}>
        <div className={styles["movie-card"]}>
          <div className={styles["movie-card__image-container"]}>
            {movie.image && <img src={movie.image.medium} alt={movie.name} />}
          </div>

          <div className={styles["movie-card__content"]}>
            <h3 className={styles["movie-card__title"]}>{movie.name}</h3>

            <div
              className={styles["movie-card__summary"]}
              dangerouslySetInnerHTML={{
                __html: movie.summary
                  ? movie.summary.substring(0, 100) + "..."
                  : "No description available",
              }}
            />

            <div className={styles["movie-card__rating-genre"]}>
              <div className={styles["movie-card__rating"]}>
                {movie.rating?.average ? movie.rating.average : "No rating"}/10
              </div>
              <div className={styles["movie-card__genres"]}>
                {movie.genres.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles["movie-card__favorite"]}>
        <FavoriteButton
          isFavorite={isFavorite(movie.id)}
          onClick={() => handleFavoriteClick(movie.id, movie)}
        />
      </div>
    </div>
  );
};

export default MovieCard;