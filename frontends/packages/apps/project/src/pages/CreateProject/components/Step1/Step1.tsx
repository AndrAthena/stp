import { Box, RadioGroup, Typography } from '@mui/material';
import React, { FC } from 'react';
import sx from './style';
import { TextInput, RadioInput } from '@lib/common';

interface Step1Props {
  onChange(e: React.ChangeEvent<any>): void;
  onSubmit(e?: React.FormEvent<HTMLFormElement>): void;
}

const Step1: FC<Step1Props> = ({ onChange, onSubmit }) => {
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
          <form
            onSubmit={onSubmit}
            onKeyPress={(e: React.KeyboardEvent<HTMLFormElement>) => {
              if (e.key === 'Enter') {
                onSubmit(e);
              }
            }}
          >
            <TextInput label="Project name" name="project_name" gutterBottom fullWidth />
            <Typography gutterBottom>Project type</Typography>
            <RadioGroup name="project_type" onChange={onChange} row>
              <RadioInput type="radio" label="B2B" value="B2B" inputProps={{ color: 'secondary' }} sx={sx.radio} gutterBottom />
              <RadioInput type="radio" label="B2C" value="B2C" inputProps={{ color: 'secondary' }} sx={sx.radio} gutterBottom />
            </RadioGroup>
            <TextInput label="Storage" name="project_storage" gutterBottom fullWidth />
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Step1;
