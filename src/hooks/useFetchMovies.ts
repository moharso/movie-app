import { useEffect, useState } from "react";
import { fetchAllMovies, fetchMovieById } from "../api/movies";
import { Movies } from "../api/types";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchAllMovies();
        setMovies(data);
      } catch (error) {
        setError("Failed to fetch movies. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return { movies, loading, error };
};

export const useFetchMovie = (id?: string) => {
  const [movie, setMovie] = useState<Movies | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const getMovie = async () => {
      try {
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (error) {
        setError("Failed to fetch movie details. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [id]);

  return { movie, loading, error };
};