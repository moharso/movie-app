import { Movies } from './types';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.tvmaze.com';

const handleApiResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

export const fetchAllMovies = async (): Promise<Movies[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/shows`);
    return handleApiResponse<Movies[]>(response);
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieById = async (id: string): Promise<Movies> => {
  try {
    const response = await fetch(`${API_BASE_URL}/shows/${id}`);
    return handleApiResponse<Movies>(response);
  } catch (error) {
    console.error(`Error fetching movie with id ${id}:`, error);
    throw error;
  }
};