import React, { createContext, useState, useEffect } from 'react';
import { Movies } from '../api/types';
import { getFavorites, toggleFavoriteMovie } from '../utils/favoriteUtils';

export interface FavoritesContextType {
  favorites: Movies[];
  toggleFavorite: (movieId: number, movie?: Movies) => void;
  isFavorite: (movieId: number) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Movies[]>([]);

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (movieId: number, movie?: Movies) => {
    const updatedFavorites = toggleFavoriteMovie(movieId, movie);
    setFavorites([...updatedFavorites]);
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((favorite) => favorite.id === movieId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};