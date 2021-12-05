import { Box } from '@mui/system';
import React, { useState } from 'react';
import TargetMarketTab, { TabList } from '../../components/TargetMarketTab';
import targetMarket from '../../assets/target-market.png';
import TargetMarketDetails from '../../components/TargetMarketDetails';

const TargetMarket = () => {
  const [value, setValue] = useState('target-1');
  const [viewDetails, setViewDetails] = useState<boolean>(false);
  const handleViewDetails = () => setViewDetails(true);

  const tabs: TabList[] = [
    {
      value: 'target-1',
      content: (
        <Box sx={{ textAlign: 'center' }} onClick={handleViewDetails}>
          <img src={targetMarket} alt="" />
        </Box>
      ),
      label: 'Target Market 1',
    },
    {
      value: 'target-2',
      content: (
        <Box sx={{ textAlign: 'center' }} onClick={handleViewDetails}>
          <img src={targetMarket} alt="" />
        </Box>
      ),
      label: 'Target Market 2',
    },
    {
      value: 'target-3',
      content: (
        <Box sx={{ textAlign: 'center' }} onClick={handleViewDetails}>
          <img src={targetMarket} alt="" />
        </Box>
      ),
      label: 'Target Market 3',
    },
  ];

  return viewDetails ? <TargetMarketDetails /> : <TargetMarketTab value={value} setValue={setValue} tabs={tabs} centered />;
};

export default TargetMarket;
