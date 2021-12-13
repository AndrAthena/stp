import { Box } from '@mui/system';
import React, { useState } from 'react';
import { CustomStepper, CustomStepProps } from '../../components/CustomStepper';
import Step1 from './components/Step1';

const CreateProject = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps: CustomStepProps[] = [
    {
      label: 'Project setting',
      content: <Step1 />,
    },
    {
      label: 'Team member',
      content: <div>Project setting</div>,
    },
  ];
  const handleContinue = () => {};
  const handlePrev = () => {};

  return (
    <CustomStepper
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      steps={steps}
      orientation="vertical"
      sx={{ minWidth: '250px' }}
      backLabel="Project Overview"
      onContinue={handleContinue}
      onPrev={handlePrev}
    />
  );
};

export default CreateProject;
