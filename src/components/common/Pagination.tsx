import Pagination from "@mui/material/Pagination";

interface PaginationControllerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationController = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationControllerProps) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(_, value) => onPageChange(value)}
      variant="outlined"
      shape="rounded"
      sx={{
        "& .MuiPaginationItem-root": {
          color: "var(--genre-color)",
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "var(--button-active-color) !important",
          color: "var(--button-text-color) !important",
        },
        "& .MuiPaginationItem-root.Mui-selected:hover": {
          backgroundColor: "var(--button-active-color) !important",
          color: "var(--button-text-color) !important", 
        },
        "& .MuiPaginationItem-root:hover": {
          backgroundColor: "var(--button-inactive-color)", 
          color: "var(--text-color)", 
        },
        "& .MuiTouchRipple-root": {
          display: "none",
        },
      }}
    />
  );
};

export default PaginationController;
