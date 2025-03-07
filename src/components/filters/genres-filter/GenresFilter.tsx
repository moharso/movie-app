import React, { useState, useRef, useEffect } from "react";
import styles from "./GenresFilter.module.scss"

interface GenresFilterProps {
  allGenres: string[];
  selectedGenres: string[];
  onGenreChange: (genre: string) => void;
}

const GenresFilter: React.FC<GenresFilterProps> = ({
  allGenres,
  selectedGenres,
  onGenreChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGenreToggle = (genre: string) => {
    onGenreChange(genre);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["genres"]} ref={dropdownRef}>
      <button 
        className={styles["genres-button"]} 
        onClick={toggleDropdown}
      >
        Genres filter {selectedGenres.length > 0 && `(${selectedGenres.length})`}
      </button>
      
      {isOpen && (
        <div className={styles["genres-dropdown-menu__container"]}>
          {allGenres.map((genre) => (
            <div key={genre} className={styles["filter-bar__dropdown-item"]}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => handleGenreToggle(genre)}
                />
                {genre}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenresFilter;
