import React, { FC } from 'react';
import {
  EventContainer,
  EventTimeContainer,
  EventTime,
  EventSummary,
} from './styled';
import { getDateTime } from '@helpers/getDateTime';

interface UserEventProps {
  start: Date;
  info: string;
}

const EventItem: FC<UserEventProps> = ({ start, info }) => {
  const dateTime = getDateTime(start);
  return (
    <EventContainer>
      <EventTimeContainer>
        <EventTime>{dateTime.hours}:{dateTime.minutes}</EventTime>
      </EventTimeContainer>
      <EventSummary>{info}</EventSummary>
    </EventContainer>
  );
};

export default EventItem;
