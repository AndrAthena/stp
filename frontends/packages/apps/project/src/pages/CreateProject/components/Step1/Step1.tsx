import { Box, InputLabel, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import sx from './style';
import { TextInput, RadioInput } from '@lib/common';
import { Formik } from 'formik';
import * as yup from 'yup';

const Step1 = () => {
  const handleNext = () => {};

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
          <Formik
            initialValues={{
              project_name: '',
              project_storage: '',
              project_type: 'B2B',
            }}
            validationSchema={yup.object({
              project_name: yup.string().min(2).required(),
              project_storage: yup.string().min(2).required(),
              project_type: yup.string().required().required(),
            })}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <form
                onSubmit={handleSubmit}
                onKeyPress={(e: React.KeyboardEvent<HTMLFormElement>) => {
                  if (e.key === 'Enter') {
                    handleSubmit(e);
                  }
                }}
              >
                <TextInput label="Project name" name="project_name" gutterBottom fullWidth />
                <Typography gutterBottom>Project type</Typography>
                <RadioGroup name="project_type" onChange={handleChange} row>
                  <RadioInput type="radio" label="B2B" value="B2B" inputProps={{ color: 'secondary' }} sx={sx.radio} gutterBottom />
                  <RadioInput type="radio" label="B2C" value="B2C" inputProps={{ color: 'secondary' }} sx={sx.radio} gutterBottom />
                </RadioGroup>
                <TextInput label="Storage" name="project_storage" gutterBottom fullWidth />
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Step1;
