import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../components/common/pageTitle';
import Calendar from '../components/ui/calendar';
import Date from './date';

const Stats = () => {
  const { id } = useParams();
  if (id) {
    return <Date id={id} />;
  }

  return <Calendar />;
};

export default Stats;
