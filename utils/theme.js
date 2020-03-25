import { createGlobalStyle } from 'styled-components';

import * as colors from './colors';
import * as breakPoints from './breakPoints';

const GlobalStyle = createGlobalStyle`
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
      background: 'white',
      foreground: '#484848',
      subtitle: '#98a4a8',
      highlight: '#eee',
      primary: '#af54df',
    },
    shadow: '0 8px 30px rgba(0,0,0,0.12);',
    breakPoints,
    logoRotate: '0',
  },
  dark: {
    isLight: false,
    colors: {
      ...colors,
      background: 'black',
      foreground: '#FFFFFF',
      subtitle: 'rgba(255, 255, 255, .5)',
      highlight: '#222',
      primary: '#FE51BB',
    },
    shadow: 'none',
    breakPoints,
    logoRotate: '0',
  },
  GlobalStyle,
};

export default theme;
