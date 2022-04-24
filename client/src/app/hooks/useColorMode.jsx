import React, { useContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { purple, amber, grey, deepOrange } from '@mui/material/colors';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const useColorMode = () => {
  return useContext(ColorModeContext);
};

export default function ColorModeProvider({ children }) {
  const [mode, setMode] = useState('dark');
  const toggleColorMode = () => {
    setMode((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        overrides: {
          MuiOutlinedInput: {
            input: {
              '&:-webkit-autofill': {
                '-webkit-box-shadow': '0 0 0 100px #000 inset',
                '-webkit-text-fill-color': '#fff'
              }
            }
          }
        },
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber,
                text: {
                  primary: grey[900],
                  secondary: grey[800]
                }
              }
            : {
                // palette values for dark mode
                primary: purple,
                background: {
                  default: '#17121b',
                  paper: '#1c1b25'
                },
                text: {
                  primary: '#fff',
                  secondary: grey[500]
                }
              })
        }
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
ColorModeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};
