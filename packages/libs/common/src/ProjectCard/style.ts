import { Sx } from '@lib/theme';

const sx: Sx = {
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    borderRadius: 2,
  },
  cardHeader: {
    p: '8px 16px',
    bgcolor: '#F3F3F4',
    '& svg:not(:last-of-type)': {
      mr: 1,
    },
    '& svg': {
      fontSize: '2rem',
    },
  },
};

export default sx;
