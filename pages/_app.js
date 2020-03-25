import React, { useState, Fragment, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeContext from '../utils/ThemeContext';
import theme from '../utils/theme';

const { GlobalStyle } = theme;

const THEME_STORAGE_KEY = 'THEME';
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const [themeState, setThemeState] = useState(true);
  useEffect(() => {
    setThemeState(localStorage.getItem(THEME_STORAGE_KEY) !== 'dark');
  }, []);

  const toggleTheme = () => {
    localStorage.setItem(THEME_STORAGE_KEY, !themeState ? 'light' : 'dark');
    setThemeState(!themeState);
  };

  return (
    <ThemeContext.Provider
      value={{
        light: themeState,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={themeState ? theme.light : theme.dark}>
        <Fragment>
          <GlobalStyle />
          <Component {...pageProps} />
        </Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
