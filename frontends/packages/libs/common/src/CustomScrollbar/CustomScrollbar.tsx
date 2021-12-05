import React, { FC } from 'react';
import { Scrollbars, ScrollbarProps } from 'react-custom-scrollbars';

const CustomScrollbar: FC<ScrollbarProps> = ({ children, style, ...rest }) => {
  return (
    <Scrollbars autoHide thumbMinSize={30} style={{ height: '100%', ...style }} {...rest}>
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
