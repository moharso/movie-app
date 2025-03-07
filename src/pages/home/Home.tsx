import React, { useState, useMemo } from "react";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { applyAllFilters } from "../../utils/filterUtils";
import FiltersContainer from "../../components/filters/FiltersContainer";
import Pagination from "../../components/common/Pagination";
import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import { useFilters } from "../../hooks/useFilters";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import MoviesGrid from "../../components/movies/MoviesGrid";
import styles from "./Home.module.scss"

const Home: React.FC = () => {
  const { movies, loading, error } = useFetchMovies();
  const { filters } = useFilters();
  const [currentPage, setCurrentPage] = useState(1);
  
  const allGenres = useMemo(() => {
    if (!movies.length) return [];
    return Array.from(new Set(movies.flatMap(movie => movie.genres))).sort();
  }, [movies]);

  const filteredMovies = useMemo(() => {
    return applyAllFilters(
      movies,
      filters.genres,
      filters.status,
      filters.sortBy
    );
  }, [movies, filters]);

  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className={styles["container"]}>
      <FiltersContainer allGenres={allGenres} />
      
      {filteredMovies.length > 0 ? (
        <>
          <MoviesGrid movies={paginatedMovies} />
          
          {totalPages > 1 && (
            <div className={styles["pagination-container"]}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      ) : (
        <p>No movies found matching your filters.</p>
      )}
    </div>
  );
};

export default Home;