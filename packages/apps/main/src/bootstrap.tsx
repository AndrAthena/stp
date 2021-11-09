import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import LeftMenu from './components/LeftMenu';
import MainRoute from './route';
import theme from './theme';

ReactDOM.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainRoute />
    </ThemeProvider>
  </HashRouter>,
  document.getElementById('root'),
);
