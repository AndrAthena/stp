import { CSSProperties } from '@lib/theme';

const sx: CSSProperties = {
  stepper: {
    width: 1,
    height: 1,
    display: 'flex',
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 1,
    p: 2,
    backgroundColor: 'primary.dark',
  },
  stepContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    p: 2,
  },
  horizontal: {},
  vertical: {
    flexDirection: 'column',
  },
};

export default sx;
