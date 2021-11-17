import { CSSProperties } from '@lib/theme/sx';

const sx: CSSProperties = {
  overview: {
    display: 'flex',
    flexDirection: 'column',
    height: 1,
    maxHeight: 1,
  },
  projectList: {
    width: 1,
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    mt: 3,
    overflowY: 'hidden',
    '& > div': {
      flex: '0 0 calc(33.33% - 2.8rem)',
      maxWidth: 'calc(33.33% - 2.8rem)',
    },
    '& > div:not(:nth-of-type(3n))': { marginRight: 2 },
  },
};

export default sx;
