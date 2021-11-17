import { CSSProperties } from '@lib/theme';

const sx: CSSProperties = {
  innerCard: {
    mb: 2,
    bgcolor: '#EFF7FF',
    '& .MuiCardHeader-root': { color: '#FFF', bgcolor: 'success.dark' },
  },
  projectContainer: {
    display: 'flex',
    '& > div': {
      flex: '1 0 0',
    },
  },
};

export default sx;
