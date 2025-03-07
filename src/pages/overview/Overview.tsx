import React from "react";
import { useParams } from "react-router-dom";
import { useFetchMovie } from "../../hooks/useFetchMovies";
import { useFavorites } from "../../hooks/useFavorites";
import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import styles from "./Overview.module.scss";

const Overview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { movie, loading, error } = useFetchMovie(id);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return <ErrorMessage message="Movie not found" />;

  const favorite = isFavorite(movie.id);
  const handleFavoriteToggle = () => {
    toggleFavorite(movie.id, movie);
  };

  return (
    <div className={styles["overview-container"]}>
      <div className={styles["movie-details"]}>
        <div className={styles["movie-poster"]}>
          {movie.image?.original ? (
            <img
              src={movie.image.original}
              alt={movie.name}
              className={styles["movie-image"]}
            />
          ) : (
            <div className={styles["no-image"]}>No image available</div>
          )}
        </div>

        <div className={styles["movie-info"]}>
          <h1 className={styles["movie-title"]}>{movie.name}</h1>
          <button className={styles["favorite-button"]} onClick={handleFavoriteToggle}>
            {favorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          
          <div
            className={styles["movie-summary"]}
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No description available",
            }}
          />

          <div className={styles["movie-meta"]}>
            <div className={styles["meta-item"]}>Premiered: {movie.premiered || "Unknown"}</div>
            <div className={styles["meta-item"]}>Ended: {movie.ended || "Ongoing"}</div>
            <div className={styles["meta-item"]}>Average runtime {movie.averageRuntime || "Unknown"} minutes</div>
            <div className={styles["meta-item"]}>Status: {movie.status || "Unknown"}</div>
            <div className={styles["meta-item"]}>Language: {movie.language || "Unknown"}</div>
            <div className={styles["meta-item"]}>Rating: {movie.rating?.average || "N/A"}/10</div>
            {movie.officialSite && (
              <div className={styles["meta-item"]}>
                Official Site:
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["official-site-button"]}
                >
                  Visit
                </a>
              </div>
            )}
            <div className={styles["movie-genres"]}>
              Genres: {movie.genres.join(", ")}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
