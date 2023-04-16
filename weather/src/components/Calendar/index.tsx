import React, { useEffect, useState } from 'react';
import {
  CalendarContainer,
  MessageContainer,
  Message,
  Button,
  Header,
  OptionButton,
  ListContainer,
  NoResults,
} from './styled';
import EventItem from './EventItem';
import { apiCalendar } from '@api/calendarApi';
import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { resetEvents, setEvents, setIsLoading } from '@store/eventsSlice';
import { getFormattedTime } from '@helpers/getFormattedTime';
import Loader from '@components/Loader';

function Calendar(): JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const { isLoading, list, isFetched } = useAppSelector(
    (state) => state.events
  );

  const dispatch = useAppDispatch();

  const handleOnClick = (): void => {
    apiCalendar.handleAuthClick();
    setIsSignedIn(true);
    dispatch(resetEvents());
  };

  useEffect(() => {
    dispatch(resetEvents());
    return () => {
      dispatch(resetEvents());
    };
  }, []);

  const handleShowButtonClick = (): void => {
    if (!isFetched) {
      dispatch(setIsLoading(true));
      apiCalendar
        .listUpcomingEvents(10)
        .then(({ result }: any) => {
          dispatch(setEvents(result.items));
        })
        .catch((e: any) => {
          throw e;
        });
    }
    setShowEvents((prev) => !prev);
  };

  const handleSignOutButtonClick = (): void => {
    apiCalendar.handleSignoutClick();
    dispatch(resetEvents());
    setIsSignedIn(false);
    setShowEvents(false);
  };

  return (
    <CalendarContainer>
      {!isSignedIn && (
        <MessageContainer>
          <Message>
            Do you have planes for today?<br></br>Let’s check!
          </Message>
          <Button onClick={handleOnClick}>Sign in with google</Button>
        </MessageContainer>
      )}
      {isSignedIn && (
        <>
          <Header>
            <OptionButton onClick={handleShowButtonClick}>
              {showEvents ? 'Hide' : 'Show'} events
            </OptionButton>
            <OptionButton onClick={handleSignOutButtonClick}>
              Sign out
            </OptionButton>
          </Header>
          {showEvents && <ListContainer>
            {isLoading && <Loader />}
            {!isLoading &&
              list.length > 0 &&
              list.map(({ start, end, summary }, index) => (
                <EventItem
                  key={index}
                  start={getFormattedTime(new Date(start.dateTime), new Date())}
                  end={end.dateTime}
                  info={summary}
                />
              ))}
            {!isLoading && list.length === 0 && <NoResults>No events</NoResults>}
          </ListContainer>}
        </>
      )}
    </CalendarContainer>
  );
}

export default React.memo(Calendar);
