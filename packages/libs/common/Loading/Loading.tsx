import { Backdrop, BackdropProps, CircularProgress, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface LoadingProps {
  size?: number;
  message?: ReactNode;
}

const Loading: FC<BackdropProps & LoadingProps> = ({ open, message, size, ...rest }) => {
  return (
    <Backdrop
      open={open}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}
    >
      <CircularProgress variant="indeterminate" size={size ?? 35} sx={{ color: 'white' }} />
      {message ? (
        typeof message === 'string' ? (
          <Typography align="center">{message}</Typography>
        ) : (
          message
        )
      ) : (
        <Typography align="center" sx={{ mt: 1, color: 'white' }}>
          Loading...
        </Typography>
      )}
    </Backdrop>
  );
};

export default Loading;
