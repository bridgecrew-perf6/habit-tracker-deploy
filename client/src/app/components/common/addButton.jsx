import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';

const AddButton = ({ onOpen }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const size = matches ? 'large' : 'medium';
  return (
    <Box sx={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
      <Fab color="primary" size={size} aria-label="add" onClick={onOpen}>
        <AddIcon sx={{ fontSize: '2rem' }} />
      </Fab>
    </Box>
  );
};
AddButton.propTypes = {
  onOpen: PropTypes.func.isRequired
};

export default AddButton;
