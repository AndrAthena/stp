import React from 'react';
import { CustomStepProps } from '@lib/common/src/CustomStepper';
import Step1 from './components/Step1';
import Step2 from './components/Step2';

interface useStepsProps {
  onChange(e: React.ChangeEvent<any>): void;
  onSubmit(e?: React.FormEvent<HTMLFormElement>): void;
}

const useSteps = ({ onChange, onSubmit }: useStepsProps) => {
  const steps: CustomStepProps[] = [
    {
      label: 'Project setting',
      content: <Step1 onSubmit={onSubmit} onChange={onChange} />,
    },
    {
      label: 'Team member',
      content: <Step2 onSubmit={onSubmit} onChange={onChange} />,
    },
  ];

  return steps;
};

export default useSteps;
