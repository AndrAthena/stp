import { Box, BoxProps, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import sx from './style';
import { SxStyle } from '@lib/theme';

interface BubbleTextProps {
  title: ReactNode;
  textSx?: SxStyle;
}

const BubbleText: FC<BubbleTextProps & BoxProps> = ({ title, children, textSx, ...rest }) => {
  return (
    <Box {...rest}>
      {typeof title === 'string' ? (
        <Typography sx={{ color: 'text.secondary' }} gutterBottom>
          {title}
        </Typography>
      ) : (
        title
      )}

      <Box
        sx={{
          ...sx.coloredBox,
          ...textSx,
        }}
      >
        <Typography>{children}</Typography>
      </Box>
    </Box>
  );
};

export default BubbleText;
