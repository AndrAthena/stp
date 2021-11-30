import React, { Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { Tab, TabProps, Tabs, TabsProps } from '@mui/material';
import sx from './style';

export interface TabList extends TabProps {
  content: ReactNode;
}

export interface TargetMarketTabProps {
  tabs: TabList[];
  setValue: Dispatch<SetStateAction<any>>;
}

const TargetMarketTab: FC<TargetMarketTabProps & TabsProps> = ({ tabs, value, setValue, ...rest }) => {
  const handleChange = (_: React.SyntheticEvent<Element, Event>, value: any) => setValue(value);
  console.log(tabs);

  return (
    <>
      <Tabs value={value} onChange={handleChange} sx={sx.tabs} TabIndicatorProps={{ hidden: true }} {...rest}>
        {tabs.map((tab, index: number) => (
          <Tab {...tab} key={`target-market-${index}`} />
        ))}
      </Tabs>
      {tabs.map(({ content, value: valueTab }, index: number) => value === valueTab && <div key={`target-market-content-${index}`}>{content}</div>)}
    </>
  );
};

export default TargetMarketTab;
