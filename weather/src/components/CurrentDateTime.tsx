import styled from 'styled-components';
import React, { useState, useEffect, FC } from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { selectTimeZone } from '@store/selectors';
import { getTimeZonedCurrentDate } from '@helpers/getTimeZonedCurrentDate';

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

const CurrentDateTime: FC = () => {
  let timeZone = useAppSelector(selectTimeZone);
  if (timeZone === undefined) {
    timeZone = "";
  }
  const [date, setDate] = useState(getTimeZonedCurrentDate(timeZone));
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(timeZone);
      setDate(getTimeZonedCurrentDate(timeZone));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

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
