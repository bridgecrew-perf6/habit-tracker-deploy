import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { getDays, getDaysData, getDayDataStatus } from '../../store/days';
import Box from '@mui/material/Box';
import Day from '../common/day';
import Typography from '@mui/material/Typography';
import { monthsNames } from '../../utils/months';
import CircularProgress from '@mui/material/CircularProgress';

const Month = ({ date }) => {
  const dispatch = useDispatch();
  const days = useSelector(getDays());

  const monthIndex = dayjs(date).month();
  const monthName = monthsNames[monthIndex];

  const month = date.substring(0, 7);
  const filteredDays = days.filter((day) => day.date.includes(month));

  const [isLoading, setLoading] = useState(true);
  const dataIsLoaded = useSelector(getDayDataStatus());

  useEffect(() => {
    if (filteredDays.length < 2) {
      dispatch(getDaysData(date));
    }
  }, []);

  useEffect(() => {
    if (dataIsLoaded) {
      setLoading(false);
    }
  }, [dataIsLoaded]);

  const monthLength = dayjs(date).daysInMonth();
  const monthDays = [];

  for (let i = 1; i <= monthLength; i++) {
    const date = `${month}-${i < 10 ? `0${i}` : i}`;
    const index = days.findIndex((day) => day.date === date);
    let isPerfect = false;
    let id = null;
    if (index !== -1) {
      isPerfect = days[index].isPerfect;
      id = days[index]._id;
    }
    monthDays.push({ id, date, isPerfect });
  }

  // const firstDay = dayjs(date).date(1);
  // const weekDay = firstDay.format('d');
  // const weekDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  return (
    <>
      <Typography variant="h4">{monthName}</Typography>
      <Box sx={{ width: { xs: '320px', sm: '400px' } }}>
        {isLoading ? (
          <CircularProgress
            color="primary"
            sx={{ display: 'block', margin: 'auto auto' }}
          />
        ) : (
          <>
            {monthDays.map((day) => (
              <Day key={day.date} {...day} />
            ))}
          </>
        )}
      </Box>
    </>
  );
};
Month.defaultProps = {
  date: dayjs().format('YYYY-MM-DD')
};
Month.propTypes = {
  date: PropTypes.string
};

export default Month;
