import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import SideBarContent from './sideBarContent';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const SideBar = ({ topBarHeight, drawerWidth, mobileOpen, onClose }) => {
  const { width } = useWindowDimensions();
  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant={width < 900 ? 'temporary' : 'permanent'}
        open={width < 900 ? mobileOpen : true}
        onClose={onClose}
        ModalProps={{
          keepMounted: true
        }}
        sx={
          width < 900
            ? {
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                  p: 2
                }
              }
            : {
                display: { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth,
                  px: 2
                }
              }
        }
      >
        <SideBarContent onHide={onClose} topBarHeight={topBarHeight} />
      </Drawer>
    </Box>
  );
};
SideBar.propTypes = {
  topBarHeight: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  drawerWidth: PropTypes.number,
  mobileOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default SideBar;
