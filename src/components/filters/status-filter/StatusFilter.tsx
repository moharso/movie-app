import React, { useState, useEffect, useRef } from "react";
import styles from "./StatusFilter.module.scss";

interface StatusFilterProps {
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  options: string[];
}

const StatusFilter: React.FC<StatusFilterProps> = ({
  selectedStatus,
  onStatusChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = (status: string) => {
    if (selectedStatus === status) {
      onStatusChange("");
    } else {
      onStatusChange(status);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["status-filter"]} ref={dropdownRef}>
      <button className={styles["status-filter-button"]} onClick={toggleDropdown}>
        Status filter
      </button>
      
      {isOpen && (
        <div className={styles["status-filter-dropdown"]}>
          {options.map((status) => (
            <div key={status} className={styles["status-filter-item"]}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedStatus === status}
                  onChange={() => handleStatusChange(status)}
                />
                {status}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusFilter;