import React, { useState, Fragment, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import ThemeContext from '../utils/ThemeContext';
import theme from '../utils/theme';

const { GlobalStyle } = theme;

const THEME_STORAGE_KEY = 'THEME';
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const [themeState, setThemeState] = useState(true);
  const [renderedState, setRenderedState] = useState(false);

  const toggleTheme = () => {
    localStorage.setItem(THEME_STORAGE_KEY, !themeState ? 'light' : 'dark');
    setThemeState(!themeState);
  };

  useEffect(() => {
    setThemeState(localStorage.getItem(THEME_STORAGE_KEY) === 'light');
    setRenderedState(true);
  }, []);

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
          <div style={renderedState ? null : { visibility: 'hidden' }}>
            <Component {...pageProps} />
          </div>
        </Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
