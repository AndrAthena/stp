import { CustomStepper } from '@lib/common';
import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import useSteps from './useSteps';

const CreateProject = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const handlePrev = () => {};

  return (
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
      {({ handleSubmit, handleChange, isSubmitting, setSubmitting }) => {
        const handleNext = () => {
          handleSubmit();
          setSubmitting(true);
        };

        const steps = useSteps({
          onChange: handleChange,
          onSubmit: handleNext,
        });

        return (
          <CustomStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            steps={steps}
            orientation="vertical"
            sx={{ minWidth: '250px' }}
            backLabel="Project Overview"
            onContinue={handleNext}
            onPrev={handlePrev}
            isValid={isSubmitting}
          />
        );
      }}
    </Formik>
  );
};

export default CreateProject;
