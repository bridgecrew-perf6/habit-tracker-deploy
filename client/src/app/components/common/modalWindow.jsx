import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import HabitContent from '../ui/addEditHabit/habitContent';

const closeBtnStyle = {
  position: 'absolute',
  top: '0.3rem',
  right: '0.3rem',
  p: 1
};

const ModalWindow = ({ onClose, open, children, width, height }) => {
  const modalStyle = {
    position: 'absolute',
    width,
    height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    outline: 0,
    borderRadius: 3,
    m: 'auto'
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 200
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <IconButton sx={closeBtnStyle} onClick={onClose} color="primary">
            <CloseIcon sx={{ fontSize: '1.7rem' }} />
          </IconButton>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};
ModalWindow.defaultProps = {
  width: { xs: '300px', sm: '400px' },
  height: 'max-content'
};

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default ModalWindow;
