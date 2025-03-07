import { Movies, SortOption } from "../api/types";

export const filterMoviesByGenre = (movies: Movies[], selectedGenres: string[]): Movies[] => {
  if (selectedGenres.length === 0) return movies;
  
  return movies.filter(movie => 
    movie.genres.some(genre => selectedGenres.includes(genre))
  );
};

export const filterMoviesByStatus = (movies: Movies[], status: string): Movies[] => {
  if (status === "All" || status === "") return movies;
  
  return movies.filter(movie => 
    movie.status?.toLowerCase() === status.toLowerCase()
  );
};

export const sortMovies = (movies: Movies[], sortBy: SortOption): Movies[] => {
  if (sortBy === "none") return movies;

  const sortedMovies = [...movies];
  
  switch(sortBy) {
    case "name-asc":
      return sortedMovies.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sortedMovies.sort((a, b) => b.name.localeCompare(a.name));
    case "premiere-asc":
      return sortedMovies.sort((a, b) => 
        new Date(a.premiered).getTime() - new Date(b.premiered).getTime()
      );
    case "premiere-desc":
      return sortedMovies.sort((a, b) => 
        new Date(b.premiered).getTime() - new Date(a.premiered).getTime()
      );
    default:
      return sortedMovies;
  }
};

export const applyAllFilters = (
  movies: Movies[], 
  genres: string[], 
  status: string, 
  sortBy: SortOption
): Movies[] => {
  let result = filterMoviesByGenre(movies, genres);
  result = filterMoviesByStatus(result, status);
  result = sortMovies(result, sortBy);
  return result;
};