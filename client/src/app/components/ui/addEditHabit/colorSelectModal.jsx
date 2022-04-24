import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ColoredCircle from '../../common/coloredCircle';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import colors from '../../../utils/colors';

const closeBtnStyle = {
  position: 'absolute',
  top: '0.3rem',
  right: '0.3rem',
  p: 1
};

const modalStyle = {
  position: 'absolute',
  width: { xs: '250px', md: '300px' },
  height: 'max-content',
  top: { xs: 0, md: '30vh' },
  left: 0,
  right: 0,
  bottom: { xs: 0, md: 'auto' },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  outline: 0,
  borderRadius: 3,
  m: 'auto'
};

const ColorSelectModal = ({ onClose, open, onChange }) => {
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
          <Typography variant="h6" gutterBottom>
            Choose Color
          </Typography>
          <Divider />
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {colors.map((color, ind) => (
              <ColoredCircle
                key={`color-${ind}`}
                color={color}
                onClick={() => {
                  onChange(color);
                  onClose();
                }}
                size={{ xs: '40px', md: '45px' }}
                margin={{ xs: 0.8, md: 1 }}
              />
            ))}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
ColorSelectModal.propTypes = {
  color: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default ColorSelectModal;
