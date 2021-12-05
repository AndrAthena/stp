import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import targetMarket from '../../assets/target-market.png';
import SegmentProperties from '../SegmentProperties';

const TargetMarketDetails = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <IconButton>
        <ArrowBack />
      </IconButton>
      <Button variant="contained" sx={{ bgcolor: '#FF6492' }} disableElevation>
        Target Market 1
      </Button>
      <div>
        <img src={targetMarket} alt="" />
      </div>
      <SegmentProperties />
    </Box>
  );
};

export default TargetMarketDetails;
