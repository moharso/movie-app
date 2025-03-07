import React, { createContext, useState, ReactNode } from "react";
import { FilterParams, SortOption } from "../api/types";

type FiltersContextType = {
  filters: FilterParams;
  setGenres: (genres: string[]) => void;
  setStatus: (status: string) => void;
  setSortBy: (sortBy: SortOption) => void;
  resetFilters: () => void;
};

const defaultFilters: FilterParams = {
  genres: [],
  status: "All",
  sortBy: "none"
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<FilterParams>(defaultFilters);

  const setGenres = (genres: string[]) => {
    setFilters(prev => ({ ...prev, genres }));
  };

  const setStatus = (status: string) => {
    setFilters(prev => ({ ...prev, status }));
  };

  const setSortBy = (sortBy: SortOption) => {
    setFilters(prev => ({ ...prev, sortBy }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setGenres,
        setStatus,
        setSortBy,
        resetFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContext;