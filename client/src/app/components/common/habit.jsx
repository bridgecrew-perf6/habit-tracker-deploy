import React, { useState } from 'react';
import HabitName from './habitName';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import HabitModal from '../ui/addEditHabit/habitModal';
import ModalWindow from '../common/modalWindow';
import withIcon from './withIcon';
import icons from '../../utils/icons';
import { deleteHabit } from '../../store/habits';
import DeleteModal from '../ui/deleteModal';
import { getHabitStatus, updateHabitStatus } from '../../store/days';

const paperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0
    }
  }
};

const Habit = ({
  habitDate,
  id,
  title,
  icon,
  streak,
  // isCompleted,
  color,
  daytime
}) => {
  const dispatch = useDispatch();

  // Status

  const today = dayjs().format('YYYY-MM-DD');
  const yesterday = dayjs().subtract(1, 'day').format('DD/MM/YYYY');

  const habitStatusData = useSelector(getHabitStatus(id, habitDate));

  const [status, setStatus] = useState(habitStatusData.isCompleted);

  const handleCompletion = () => {
    dispatch(
      updateHabitStatus({
        date: habitStatusData.date,
        _id: habitStatusData._id,
        values: { isCompleted: !status }
      })
    );
    setStatus((prevState) => !prevState);
  };

  // Dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Habit options modals
  const [editOpen, setEditOpen] = useState(false);
  const handleEditToggle = () => setEditOpen((prevState) => !prevState);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteToggle = () => setDeleteOpen((prevState) => !prevState);

  // Find and show icon
  const iconObj = icons.find((i) => i.name === icon);
  const IconWithProps = withIcon(iconObj.component);

  // Handle delete
  const handleDelete = () => {
    dispatch(deleteHabit(id));
    handleDeleteToggle();
  };

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          pr: 1.5
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            p: 1
          }}
        >
          <Box sx={{ mr: 1, p: 1, display: 'grid', placeItems: 'center' }}>
            <IconWithProps sx={{ color, fontSize: '40px' }} />
          </Box>
          <div>
            <HabitName title={title} isCompleted={status} />
            {/* <Box>{streak}-day streak</Box> */}
          </div>
        </Box>
        <div>
          <Checkbox
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            icon={<RadioButtonUncheckedIcon fontSize="large" />}
            checkedIcon={<CheckCircleIcon fontSize="large" color="success" />}
            checked={status}
            onChange={handleCompletion}
          />
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </Card>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={paperProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleEditToggle}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteToggle}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>

      <HabitModal
        type="edit"
        open={editOpen}
        onClose={handleEditToggle}
        id={id}
        initialValues={{
          name: title,
          color: color,
          time: daytime,
          icon: icon
        }}
      />
      <ModalWindow onClose={handleDeleteToggle} open={deleteOpen} width="350px">
        <DeleteModal title={title} onDelete={handleDelete} />
      </ModalWindow>
    </>
  );
};
Habit.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  daytime: PropTypes.string,
  streak: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isCompleted: PropTypes.bool,
  habitDate: PropTypes.string
};

export default Habit;
