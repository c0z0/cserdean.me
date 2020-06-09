import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';
import * as breakPoints from './breakPoints';

const GlobalStyle = createGlobalStyle`
  .light-theme {
    --shadow: 0 8px 30px rgba(0,0,0,0.12);
    --background: white;
    --foreground: #484848;
    --subtitle: #98a4a8;
    --highlight: #eee;
    --primary: #af54df;
  }

  .light-theme .gradient-bg {
    fill: url(#prefix__paint0_linear);
  }


  .dark-theme .gradient-bg {
    fill: url(#prefix__paint1_linear);
  }
   

  .dark-theme {
    --shadow: none;
    --background: black;
    --foreground: #FFFFFF;
    --subtitle: rgba(255, 255, 255, .5);
    --highlight: #222;
    --primary: #FE51BB;
  }

 body {
 margin: 0;
  background: ${({
    theme: {
      colors: { background },
    },
  }) => background};
 }
`;

const theme = {
  light: {
    isLight: true,
    colors: {
      ...colors,
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      subtitle: 'var(--subtitle)',
      highlight: 'var(--highlight)',
      primary: 'var(--primary)',
    },
    shadow: 'var(--shadow)',
    breakPoints,
    logoRotate: '0',
  },
  dark: {
    isLight: false,
    colors: {
      ...colors,
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      subtitle: 'var(--subtitle)',
      highlight: 'var(--highlight)',
      primary: 'var(--primary)',
    },
    shadow: 'var(--shadow)',
    breakPoints,
    logoRotate: '0',
  },
  GlobalStyle,
};

export default theme;
