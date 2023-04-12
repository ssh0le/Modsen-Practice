import React, { FC } from 'react';
import {
  EventContainer,
  EventTimeContainer,
  EventTime,
  EventSummary,
} from './styled';

interface UserEventProps {
  start: string;
  end: string;
  info: string;
}

const EventItem: FC<UserEventProps> = ({ start, end, info }) => {
  const time = start;
  return (
    <EventContainer>
      <EventTimeContainer><EventTime>{time}</EventTime></EventTimeContainer>
      <EventSummary>{info}</EventSummary>
    </EventContainer>
  );
};

export default EventItem;
