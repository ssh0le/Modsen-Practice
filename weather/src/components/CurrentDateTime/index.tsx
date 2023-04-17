import React, { useState, useEffect, FC } from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { selectTimeZone } from '@store/selectors';
import { getTimeZonedCurrentDate } from '@helpers/getTimeZonedCurrentDate';
import { DateTimeContainer, Date, Time } from './styled';
import { getDateTime } from '@helpers/getDateTime';



const CurrentDateTime: FC = () => {
  let timeZone = useAppSelector(selectTimeZone);
  if (timeZone === undefined) {
    timeZone = '';
  }
  const [date, setDate] = useState(getTimeZonedCurrentDate(timeZone));
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getTimeZonedCurrentDate(timeZone));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  const dateTime = getDateTime(date);
  return (
    <DateTimeContainer>
      <Time>
        {dateTime.hours}:{('0' + String(dateTime.minutes)).slice(-2)}
      </Time>
      <Date>
        {dateTime.dayWeek}, {dateTime.monthName} {dateTime.monthDay},{' '}
        {dateTime.year}
      </Date>
    </DateTimeContainer>
  );
};

export default CurrentDateTime;
