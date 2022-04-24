import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import icons from '../../../utils/icons';
import withIcon from '../../common/withIcon';

const closeBtnStyle = {
  position: 'absolute',
  top: '0.3rem',
  right: '0.3rem',
  p: 1
};

const modalStyle = {
  position: 'absolute',
  width: { xs: '80vw', sm: '50vw', md: '300px' },
  height: 'min-content',
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

const IconSelectModal = ({ onClose, open, onChange }) => {
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
            Choose Icon
          </Typography>
          <Divider />
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            {icons.map((icon) => {
              const IconWithProps = withIcon(icon.component);

              return (
                <IconButton
                  key={`icon-${icon.name}`}
                  onClick={() => {
                    onChange(icon.name);
                    onClose();
                  }}
                >
                  <IconWithProps fontSize="large" color="white" sx={{}} />
                </IconButton>
              );
            })}
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
IconSelectModal.propTypes = {
  icon: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default IconSelectModal;
