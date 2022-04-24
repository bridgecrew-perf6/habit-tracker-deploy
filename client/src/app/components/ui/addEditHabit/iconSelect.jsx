import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import IconSelectModal from './iconSelectModal';
import withIcon from '../../common/withIcon';
import icons from '../../../utils/icons';

const IconSelect = ({ icon, color, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const IconWithProps = icon
    ? withIcon(icons.find((i) => i.name === icon).component)
    : null;
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
        Choose icon...
      </Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '25%'
        }}
      >
        {icon && (
          <IconButton onClick={handleOpen}>
            <IconWithProps sx={{ color, fontSize: '45px' }} />
          </IconButton>
        )}
      </Box>
      <IconSelectModal onClose={handleClose} open={open} onChange={onChange} />
    </Box>
  );
};
IconSelect.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func
};

export default IconSelect;
