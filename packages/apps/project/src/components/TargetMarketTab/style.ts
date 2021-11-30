import { CSSProperties } from '@lib/theme';

const sx: CSSProperties = {
  tabs: {
    '& .MuiTab-root': {
      textTransform: 'initial',
      borderRadius: 2,
      '&:nth-of-type(n+1):not(:last-of-type)': {
        mx: 2,
      },
      '&.Mui-selected': {
        color: 'common.white',
        bgcolor: '#FF6492',
      },
    },
  },
};

export default sx;
