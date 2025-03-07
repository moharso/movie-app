import React from 'react';
import { CircularProgress, Box } from '@mui/material';

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={3}>
      <CircularProgress />
      <Box mt={2}>{message}</Box>
    </Box>
  );
};

export default Loading;