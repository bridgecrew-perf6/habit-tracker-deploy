import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

import Menu from './menu';
import { Typography } from '@mui/material';

const SideBarContent = ({ onHide, topBarHeight }) => {
  return (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Habit Tracker
        </Typography>
      </Toolbar>
      <Divider />
      <Menu onHide={onHide} />
    </div>
  );
};
SideBarContent.propTypes = {
  topBarHeight: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onHide: PropTypes.func
};

export default SideBarContent;
