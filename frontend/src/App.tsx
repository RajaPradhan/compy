import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import { useTheme } from 'shared/theme';
import Layout from 'shared/components/Layout';
import Routes from './Routes';

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
