import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import HabitList from '../components/ui/habitList';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { getDay, getDayById } from '../store/days';
import { monthsNames } from '../utils/months';

const Date = ({ id }) => {
  const day = useSelector(getDayById(id));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDay(id));
  }, []);

  const date = dayjs(day.date).date();
  const year = dayjs(day.date).year();
  const month = monthsNames[dayjs(day.date).month()];

  const formattedDate = `${date} ${month} ${year}`;

  return (
    <>
      <Typography variant="h4">{formattedDate}</Typography>
      {/* <HabitList date={date} /> */}
    </>
  );
};
Date.propTypes = {
  date: PropTypes.string,
  id: PropTypes.string
};

export default Date;
