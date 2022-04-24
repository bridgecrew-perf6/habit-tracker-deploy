import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Icon = ({ icon, color }) => {
  return <Box sx={{ size: '2rem', mr: 1 }}>{icon.component}</Box>;
};
Icon.defaultProps = {
  color: 'white'
};

Icon.propTypes = {
  icon: PropTypes.object,
  color: PropTypes.string
};

export default Icon;
