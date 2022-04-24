import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import HabitContent from './habitContent';

const closeBtnStyle = {
  position: 'absolute',
  top: '0.3rem',
  right: '0.3rem',
  p: 1
};

const modalStyle = {
  position: 'absolute',
  width: { xs: '300px', sm: '400px' },
  height: 'max-content',
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

const HabitModal = ({ id, type, onClose, open, initialValues }) => {
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
          <HabitContent
            id={id}
            type={type}
            onClose={onClose}
            initialValues={initialValues}
          />
        </Box>
      </Fade>
    </Modal>
  );
};
HabitModal.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default HabitModal;
