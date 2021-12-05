import { CSSProperties } from '@lib/theme';

const sx: CSSProperties = {
  step1: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      maxWidth: 900,
      minWidth: 900,
    },
  },
  radio: {
    flex: '1 0 0',
    ml: 0,
    mr: 0,
    border: '1px solid rgb(0 0 0 / .23)',
    borderRadius: 1.5,
    '&:first-of-type': {
      mr: 1.5,
    },
  },
};

export default sx;
