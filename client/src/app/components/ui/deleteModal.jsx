import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DeleteModal = ({ title, onDelete }) => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ textAlign: 'center', marginBottom: 2 }}
      >
        {`Delete habit "${title}"?`}
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          size="larger"
          variant="outlined"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={onDelete}
        >
          Delete
        </Button>
      </Box>{' '}
    </>
  );
};
DeleteModal.propTypes = {
  title: PropTypes.string,
  onDelete: PropTypes.func
};

export default DeleteModal;
