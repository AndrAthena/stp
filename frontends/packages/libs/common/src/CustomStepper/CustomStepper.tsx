import React, { FC, ReactNode } from 'react';
import { Box, Button, Step, StepLabel, StepLabelProps, Stepper, StepperProps, Theme } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import style from './style';
import { SxProps } from '@mui/system';

export interface CustomStepProps extends StepLabelProps {
  label: string;
  content: ReactNode;
}

interface CustomStepperProps {
  steps: CustomStepProps[];
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  backLabel?: string;
  backHandler?(event: React.MouseEvent<any>): void;
  backButtonLabel?: string;
  buttonLabel?: string;
  buttonFinishLabel?: string;
  onPrev?(event: React.MouseEvent<any>): void;
  onContinue?(event: React.MouseEvent<any>): void;
  onFinish?(event: React.MouseEvent<any>): void;
  buttonPlacement?: 'left' | 'center' | 'right';
  isValid: boolean;
}

const CustomStepper: FC<CustomStepperProps & StepperProps & { sxContainer?: SxProps<Theme> }> = ({
  activeStep,
  setActiveStep,
  sx,
  sxContainer,
  orientation,
  steps,
  backLabel,
  backHandler,
  buttonLabel,
  backButtonLabel,
  buttonFinishLabel,
  onPrev,
  onContinue,
  onFinish,
  buttonPlacement = 'center',
  isValid,
  ...rest
}) => {
  const verticalSx = orientation === 'horizontal' ? style.vertical : style.horizontal;
  const stepProps = {
    activeStep,
    orientation,
    sx: { flex: 1, justifyContent: 'center' },
  };
  const lastIndex = steps.length - 1;
  const handleContinue = (e: React.MouseEvent<any>) => {
    onContinue(e);
    if (isValid) setActiveStep((prev) => prev + 1);
  };

  const handlePrev = (e: React.MouseEvent<any>) => {
    onPrev(e);
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box sx={{ ...style.stepper, ...verticalSx, ...sxContainer }}>
      <Box sx={{ ...style.stepContainer, ...sx }}>
        {backLabel && (
          <Button variant="text" sx={{ px: 0, justifyContent: 'flex-start', color: '#fff' }} onClick={backHandler} startIcon={<ArrowBack />}>
            {backLabel}
          </Button>
        )}
        <Stepper activeStep={activeStep} {...stepProps} {...rest}>
          {steps.map(({ label, content: _, ...rest }) => (
            <Step key={label.replace(' ', '-').toLowerCase()}>
              <StepLabel sx={style.stepLabel} {...rest}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={style.stepContent}>
        {steps.map(({ content }, index: number) => activeStep === index && content)}
        <Box sx={{ textAlign: buttonPlacement }}>
          {activeStep !== 0 && (
            <Button variant="outlined" color="secondary" sx={{ mr: 1.5 }} onClick={handlePrev}>
              {backButtonLabel ?? 'Back'}
            </Button>
          )}
          <Button variant="contained" color="secondary" onClick={lastIndex === activeStep ? onFinish : handleContinue}>
            {lastIndex === activeStep ? buttonFinishLabel ?? 'Finish' : buttonLabel ?? 'Continue'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomStepper;
