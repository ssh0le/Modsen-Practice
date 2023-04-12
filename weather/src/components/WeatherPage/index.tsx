import CurrentDateTime from '../CurrentDateTime';
import CurrentLocation from '../CurrentLocation';
import CitySearchBar from '../CitySearchBar';
import Background from '../Background';
import CurrentWeather from '../CurrentWeather';
import Calendar from '../Calendar';
import Forecast from '../Forecast/Forecast';
import React, { FC } from 'react';
import {
  PageContainer,
  Header,
  Body,
  LocalityContainer,
  SearchBarContainer,
  CurrentWeatherContainer,
  EventsContainer,
  ForecastContainer,
} from './styled';

const WeatherPage: FC = () => {
  return (
    <PageContainer>
      <Background
        container={document.getElementById('background') as HTMLElement}
      />
      <Header>
        <LocalityContainer>
          <CurrentDateTime />
          <CurrentLocation />
        </LocalityContainer>
        <SearchBarContainer>
          <CitySearchBar />
        </SearchBarContainer>
      </Header>
      <Body>
        <CurrentWeatherContainer>
          <CurrentWeather />
        </CurrentWeatherContainer>
        <EventsContainer>
          <Calendar />
        </EventsContainer>
      </Body>
      <ForecastContainer>
        <Forecast />
      </ForecastContainer>
    </PageContainer>
  );
};

export default WeatherPage;
