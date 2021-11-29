import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontWeightRegular: 300,
    htmlFontSize: 14,
    fontSize: 14,
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '.875rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  palette: {
    secondary: {
      main: '#F98436',
    },
    primary: {
      main: '#4E5679',
      dark: '#3A405A',
    },
    text: {
      secondary: '#707070',
    },
    success: {
      main: '#2BDF60',
      light: '#06D6A0',
      dark: '#2A9D8F',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          flexShrink: 0,
          padding: '7px 24px',
          textTransform: 'initial',
          fontWeight: 400,
          borderRadius: 6,
        },
        contained: {
          backgroundColor: '#F3F3F4'
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '8.5px 14px',
          borderRadius: 6,
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionStart: {
          '& + input': {
            paddingLeft: 0,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
