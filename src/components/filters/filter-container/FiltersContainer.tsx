import React from "react";
import GenresFilter from "../genres-filter/GenresFilter";
import StatusFilter from "../status-filter/StatusFilter";
import SortFilter from "../sort-filter/SortFilter";
import { useFilters } from "../../../hooks/useFilters";
import { STATUS_OPTIONS } from "../../../utils/constants";
import styles from "./FilterContainer.module.scss"

interface FilterContainerProps {
  allGenres: string[];
}

const FilterContainer: React.FC<FilterContainerProps> = ({ allGenres }) => {
  const { filters, setGenres, setStatus, setSortBy } = useFilters();

  const handleGenreChange = (genre: string) => {
    const currentGenres = [...filters.genres];
    const index = currentGenres.indexOf(genre);
    
    if (index === -1) {
      currentGenres.push(genre);
    } else {
      currentGenres.splice(index, 1);
    }
    
    setGenres(currentGenres);
  };

  return (
    <div className={styles["filter-container"]}>
      <SortFilter sortBy={filters.sortBy} onSortChange={setSortBy} />
      <GenresFilter
        allGenres={allGenres}
        selectedGenres={filters.genres}
        onGenreChange={handleGenreChange}
      />
      <StatusFilter
        options={STATUS_OPTIONS}
        selectedStatus={filters.status}
        onStatusChange={setStatus}
      />
    </div>
  );
};

export default FilterContainer;