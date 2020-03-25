import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../utils/theme';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme.light}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
