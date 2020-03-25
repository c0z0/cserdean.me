import React, { useState, Fragment } from 'react';
import cookie from 'cookie';
import { ThemeProvider } from 'styled-components';

import ThemeContext from '../utils/ThemeContext';
import theme from '../utils/theme';

const { GlobalStyle } = theme;

const THEME_STORAGE_KEY = 'THEME';
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, isLight }) {
  const [themeState, setThemeState] = useState(isLight);

  const toggleTheme = () => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = cookie.serialize(
      THEME_STORAGE_KEY,
      !themeState ? 'light' : 'dark',
      { expires },
    );
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

MyApp.getInitialProps = async ({ ctx: { req } }) => {
  if (req) {
    return {
      isLight: cookie.parse(req.headers.cookie)[THEME_STORAGE_KEY] !== 'dark',
    };
  }
  return {
    isLight: cookie.parse(document.cookie)[THEME_STORAGE_KEY] !== 'dark',
  };
};

export default MyApp;
