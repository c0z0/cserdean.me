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

 body, h1, h2, h3, h4, h5, h6, p {
   transition: background .2s linear; 

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
      name: '#af54df',
    },
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
      name: '#FE51BB',
    },
    breakPoints,
    logoRotate: '-90',
  },
  GlobalStyle,
};

export default theme;
