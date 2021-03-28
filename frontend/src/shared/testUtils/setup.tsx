import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { render } from '@testing-library/react';

import Routes from '../../Routes';
import mockTheme from './mockTheme';

const App = (
  <ThemeProvider theme={mockTheme}>
    <Routes />
  </ThemeProvider>
);

const customRender = () => render(App);

// override render method
export default customRender;
