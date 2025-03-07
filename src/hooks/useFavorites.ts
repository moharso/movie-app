import { useState, useEffect } from 'react';
import { Movies } from '../api/types';
import { getFavorites, toggleFavoriteMovie } from '../utils/favoriteUtils';
import { FAVORITES_CHANGED_EVENT } from '../utils/constants';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Movies[]>([]);

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);

    const handleFavoritesChanged = () => {
      const updatedFavorites = getFavorites();
      setFavorites(updatedFavorites);
    };

    window.addEventListener(FAVORITES_CHANGED_EVENT, handleFavoritesChanged);

    window.addEventListener('storage', (e) => {
      if (e.key === 'favorites') {
        handleFavoritesChanged();
      }
    });

    return () => {
      window.removeEventListener(FAVORITES_CHANGED_EVENT, handleFavoritesChanged);
      window.removeEventListener('storage', handleFavoritesChanged);
    };
  }, []);

  const toggleFavorite = (movieId: number, movie?: Movies) => {
    const updatedFavorites = toggleFavoriteMovie(movieId, movie);
    setFavorites(updatedFavorites);
    
    window.dispatchEvent(new Event(FAVORITES_CHANGED_EVENT));
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((favorite) => favorite.id === movieId);
  };

  return { favorites, toggleFavorite, isFavorite };
};