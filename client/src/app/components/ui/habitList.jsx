import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Habit from '../common/habit';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { getHabits, getHabitDataStatus } from '../../store/habits';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const HabitList = ({ date }) => {
  const habits = useSelector(getHabits());
  const habitsLoaded = useSelector(getHabitDataStatus());
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (habitsLoaded) {
      setLoading(false);
    }
  }, [habitsLoaded]);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            mt: '30px',
            textAlign: 'center',
            width: { lg: '30%' }
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <>
          {habits && habits.length > 0 ? (
            <Box sx={{ width: { lg: '30%' } }}>
              {habits.filter((h) => h.time === 'morning').length > 0 && (
                <Typography variant="h6" gutterBottom={true}>
                  Morning
                </Typography>
              )}
              {habits
                .filter((h) => h.time === 'morning')
                .map((habit) => (
                  <Habit
                    key={`${habit._id}-${habit.name}`}
                    habitDate={date}
                    id={habit._id}
                    title={habit.name}
                    icon={habit.icon}
                    color={habit.color}
                    // streak={h.streak}
                    isCompleted={false}
                    daytime={habit.time}
                  />
                ))}
              {habits.filter((h) => h.time === 'afternoon').length > 0 && (
                <Typography variant="h6" gutterBottom={true}>
                  Afternoon
                </Typography>
              )}
              {habits
                .filter((h) => h.time === 'afternoon')
                .map((habit) => (
                  <Habit
                    key={`${habit._id}-${habit.name}`}
                    habitDate={date}
                    id={habit._id}
                    title={habit.name}
                    icon={habit.icon}
                    color={habit.color}
                    // streak={h.streak}
                    isCompleted={false}
                    daytime={habit.time}
                  />
                ))}
              {habits.filter((h) => h.time === 'evening').length > 0 && (
                <Typography variant="h6" gutterBottom={true}>
                  Evening
                </Typography>
              )}
              {habits
                .filter((h) => h.time === 'evening')
                .map((habit) => (
                  <Habit
                    key={`${habit._id}-${habit.name}`}
                    habitDate={date}
                    id={habit._id}
                    title={habit.name}
                    icon={habit.icon}
                    color={habit.color}
                    // streak={h.streak}
                    isCompleted={false}
                    daytime={habit.time}
                  />
                ))}
              {habits.filter((h) => h.time === 'anytime').length > 0 && (
                <Typography variant="h6" gutterBottom={true}>
                  Anytime
                </Typography>
              )}
              {habits
                .filter((h) => h.time === 'anytime')
                .map((habit) => (
                  <Habit
                    key={`${habit._id}-${habit.name}`}
                    habitDate={date}
                    id={habit._id}
                    title={habit.name}
                    icon={habit.icon}
                    color={habit.color}
                    // streak={h.streak}
                    isCompleted={false}
                    daytime={habit.time}
                  />
                ))}
            </Box>
          ) : (
            <Typography variant="h4" gutterBottom={true}>
              You don&apos;t have any habits yet!
            </Typography>
          )}
        </>
      )}
    </>
  );
};
HabitList.propTypes = {
  date: PropTypes.string
};

export default HabitList;
