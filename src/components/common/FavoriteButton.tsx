import React from 'react';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        style={{
          fill: isFavorite ? 'green' : '#757575',
          stroke: isFavorite ? 'green' : '#757575',
          strokeWidth: '1.2',
          transition: 'fill 0.3s, stroke 0.3s',
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
        />
      </svg>
    </button>
  );
};

export default FavoriteButton;
