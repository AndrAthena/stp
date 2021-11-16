import { Sx } from '@lib/theme';

const sx: Sx = {
  innerCard: {
    mb: 2,
    bgcolor: '#EFF7FF',
    '& .MuiCardHeader-root': { color: '#FFF', bgcolor: 'success.dark' },
  },
  coloredBox: {
    mx: 1,
    mb: 2,
    p: 1.5,
    minHeight: '120px',
    borderRadius: 2,
  },
  projectContainer: {
    display: 'flex',
    '& > div': {
      flex: '1 0 0',
    },
  },
};

export default sx;
