import { Box, InputLabel, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import sx from './style';
import { TextInput, RadioInput } from '@lib/common';

const Step1 = () => {
  return (
    <Box sx={sx.step1}>
      <Box>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome, Set up your project
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          First, let's started with the basics
        </Typography>
        <Box sx={{ mt: 10 }}>
          <TextInput label="Project name" gutterBottom fullWidth />
          <Typography gutterBottom>Project type</Typography>
          <RadioGroup name="project_type" row>
            <RadioInput type="radio" label="B2B" value="B2B" inputProps={{ color: 'secondary' }} sx={sx.radio} gutterBottom />
            <RadioInput type="radio" label="B2C" value="B2C" inputProps={{ color: 'secondary' }} sx={sx.radio} gutterBottom />
          </RadioGroup>
          <TextInput label="Storage" gutterBottom fullWidth />
        </Box>
      </Box>
    </Box>
  );
};

export default Step1;
