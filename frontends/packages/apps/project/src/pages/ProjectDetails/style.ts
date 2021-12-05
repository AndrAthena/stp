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
  coloredBox: {
    mb: 2,
    p: 1.5,
    minHeight: '120px',
    borderRadius: 2,
  },
};

export default sx;
