import { createContext } from 'react';

const ThemeContext = createContext({ light: true, toggleTheme: () => {} });

export default ThemeContext;
