import { Movies } from "../api/types";

const FAVORITES_KEY = "favorites";

export const getFavorites = (): Movies[] => {
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error("Error retrieving favorites from localStorage:", error);
    return [];
  }
};

export const saveFavorites = (favorites: Movies[]): void => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Error saving favorites to localStorage:", error);
  }
};

export const toggleFavoriteMovie = (movieId: number, movie?: Movies): Movies[] => {
  const favorites = getFavorites();
  const existingIndex = favorites.findIndex(fav => fav.id === movieId);

  if (existingIndex !== -1) {
    favorites.splice(existingIndex, 1);
  } else if (movie) {
    favorites.push(movie);
  }

  saveFavorites(favorites);
  return favorites;
};

export const isFavoriteMovie = (movieId: number): boolean => {
  const favorites = getFavorites();
  return favorites.some(fav => fav.id === movieId);
};
