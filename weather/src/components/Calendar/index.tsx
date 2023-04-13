import React, { FC, useState } from 'react';
import {
  CalendarContainer,
  MessageContainer,
  Message,
  SignInButton,
  ListContainer,
} from './styled';
import EventItem from './EventItem';

interface UserTaskExample {
  start: string;
  end: string;
  info: string;
}

const tasksExample: UserTaskExample[] = [
  {
    start: '8:00',
    end: '10:00',
    info: 'Wake up',
  },
  {
    start: '12:00',
    end: '12:00',
    info: 'Meet up',
  },
  {
    start: '15:00',
    end: '15:00',
    info: 'Movie time',
  },
  {
    start: '15:00',
    end: '15:00',
    info: 'Movie time',
  },
  {
    start: '15:00',
    end: '15:00',
    info: 'Movie time',
  },
  {
    start: '15:00',
    end: '15:00',
    info: 'Very very very very very very very very very very very long task',
  },
  {
    start: '15:00',
    end: '15:00',
    info: 'Movie time',
  },
];

const Calendar: FC = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const clickHandler = (): void => {
    setIsSignedIn(true);
  };

  return (
    <CalendarContainer>
      {!isSignedIn && (
        <MessageContainer>
          <Message>
            Do you have planes for today?<br></br>Let’s check!
          </Message>
          <SignInButton onClick={clickHandler}>
            Sign in with Google
          </SignInButton>
        </MessageContainer>
      )}
      {isSignedIn && (
        <ListContainer>
          {tasksExample.map(({start, end, info}, index) => (
            <EventItem key={index} start={start} end={end} info={info} />
          ))}
        </ListContainer>
      )}
    </CalendarContainer>
  );
};

export default Calendar;
