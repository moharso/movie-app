import React from "react";
import styles from "./SortFilter.module.scss"

interface SortFilterProps {
  sortBy: "none" | "name-asc" | "name-desc" | "premiere-asc" | "premiere-desc";
  onSortChange: (sortBy: "none" | "name-asc" | "name-desc" | "premiere-asc" | "premiere-desc") => void;
}

const SortFilter: React.FC<SortFilterProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className={styles["sort"]}>
      <select 
        className={styles["button"]}
        value={sortBy} 
        onChange={(e) => onSortChange(e.target.value as SortFilterProps["sortBy"])}
      >
        <option value="none">No Sort</option>
        <option value="name-asc">Name Ascending</option>
        <option value="name-desc">Name Descending</option>
        <option value="premiere-asc">Premiere Date Ascending</option>
        <option value="premiere-desc">Premiere Date Descending</option>
      </select>
    </div>
  );
};

export default SortFilter;