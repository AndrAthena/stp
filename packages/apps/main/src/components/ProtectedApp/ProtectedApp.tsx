import React from 'react';
import { Box } from '@mui/material';
import LeftMenu from '../LeftMenu';
import ProtectedRoute from '../ProtectedRoute';
import { CustomScrollbar } from '@lib/common';

const ProtectedApp = () => {
  return (
    <Box sx={{ height: 1, display: 'flex' }}>
      <LeftMenu />
      <Box
        sx={{ maxWidth: 'calc(100% - 300px)', flex: 1, height: '100vh', p: 2, overflow: 'hidden' }}
      >
        <CustomScrollbar>
          <ProtectedRoute />
        </CustomScrollbar>
      </Box>
    </Box>
  );
};

export default ProtectedApp;
