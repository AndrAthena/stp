import React, { FC } from 'react';
import { Scrollbars, ScrollbarProps } from 'react-custom-scrollbars';

const CustomScrollbar: FC<ScrollbarProps> = ({ children, ...rest }) => {
  return (
    <Scrollbars autoHide thumbMinSize={30} {...rest}>
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
