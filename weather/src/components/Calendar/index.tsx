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
import Loader from '@components/Loader';
import { getTimeZonedDate } from '@helpers/getTimeZonedDate';

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
        .listEvents({
          timeMin: new Date().toISOString(),
          timeMax: new Date(new Date().setUTCHours(23,59,59,999)).toISOString(),
          showDeleted: true,
          maxResults: 10,
          orderBy: 'updated'
      })
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
              list.map(({ start, summary }, index) => (
                <EventItem
                  key={index}
                  start={getTimeZonedDate(new Date(start.dateTime), start.timeZone)}
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
