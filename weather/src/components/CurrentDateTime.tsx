import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

interface DateTime {
  hours: number;
  minutes: number;
  dayWeek: string;
  monthName: string;
  monthDay: number;
  year: number;
}

const DateTimeWrapper = styled.div`
  .time {
    font-size: 26px;
  }
`;

const CurrentDateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 20000);

    return () => clearInterval(interval);
  });

  const dateTime = getDateTime(date);
  return (
    <DateTimeWrapper>
      <div className="time">
        {dateTime.hours}:{('0' + String(dateTime.minutes)).slice(-2)}
      </div>
      <div className="date">
        {dateTime.dayWeek}, {dateTime.monthName} {dateTime.monthDay},{' '}
        {dateTime.year}
      </div>
    </DateTimeWrapper>
  );
};

export default CurrentDateTime;

// helpers

function getDateTime(date: Date): DateTime {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    dayWeek: date.toLocaleDateString('en-EN', { weekday: 'long' }),
    monthName: date.toLocaleString('default', { month: 'long' }),
    monthDay: date.getDate(),
    year: date.getFullYear(),
  };
}