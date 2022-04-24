import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from '../../hooks/useColorMode';

const DarkModeBtn = ({ topBarHeight }) => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      sx={{ ml: 1, height: topBarHeight }}
      onClick={toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};
DarkModeBtn.propTypes = {
  topBarHeight: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default DarkModeBtn;
