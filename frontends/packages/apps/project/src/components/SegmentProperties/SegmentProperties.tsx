import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const SegmentProperties = () => {
  return (
    <Card variant="outlined" sx={{ position: 'absolute', top: 2, right: 2, minWidth: '200px' }}>
      <CardHeader title="Properties of segment" sx={{ p: 1, textAlign: 'center', color: '#fff', bgcolor: '#4472C4' }} disableTypography />
      <CardContent sx={{ p: 2 }}>
        <Typography>Name: Frozen market</Typography>
        <Typography>
          Variation base{' '}
          <Typography component="span" sx={{ color: 'secondary.main' }}>
            (2)
          </Typography>
        </Typography>
        <Typography component="ul">
          <Typography component="li">Demographics</Typography>
          <Typography component="li">Geographics</Typography>
        </Typography>
        <Typography>
          Branch variation{' '}
          <Typography component="span" sx={{ color: 'secondary.main' }}>
            (10)
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SegmentProperties;
