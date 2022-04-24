import React from 'react';
import Button from '@mui/material/Button';
import ColoredCircle from '../../common/coloredCircle';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import ColorSelectModal from './colorSelectModal';

const ColorSelect = ({ color, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: 2,
        mb: 1
      }}
    >
      <Button
        onClick={handleOpen}
        variant="outlined"
        sx={{ width: '70%', p: 1.5, color: 'white', borderColor: 'gray' }}
      >
        Choose color...
      </Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '25%'
        }}
      >
        <ColoredCircle
          color={color}
          size="40px"
          onClick={() => {
            handleOpen();
          }}
        />
      </Box>
      <ColorSelectModal onClose={handleClose} open={open} onChange={onChange} />
    </Box>
  );
};
ColorSelect.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func
};

export default ColorSelect;
