import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const PageTitle = ({ title }) => {
  return (
    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
      {title}
    </Typography>
  );
};
PageTitle.propTypes = {
  title: PropTypes.string
};

export default PageTitle;
