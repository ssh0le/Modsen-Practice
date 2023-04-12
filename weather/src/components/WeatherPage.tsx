import styled from 'styled-components';
import CurrentDateTime from './CurrentDateTime';
import CurrentLocation from './CurrentLocation';
import CitySearchBar from './CitySearchBar';
import Background from './Background'
import CurrentWeather from './CurrentWeather';
import UserTasks from './UserTasks/UserEventsList';
import Forecast from './Forecast/Forecast';
import React from 'react';

const WeatherPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 40px;

  .header, .body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .date-time-location {
    font-size: 20px;
  }

  .city-search {
  }

  .body {
    display: flex;
    align-items: flex-start;
    
  }

  .tasks {
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .weather {
    max-width: 40%;
  }
`;

const WeatherPage = () => {
  return (
    <WeatherPageWrapper>
      <Background container={document.getElementById('background') as HTMLElement}/>
      <div className="header">
        <div className="date-time-location">
          <CurrentDateTime />
          <CurrentLocation />
        </div>
        <div className="city-search">
          <CitySearchBar />
        </div>
      </div>
      <div className="body">
          <div className="weather">
            <CurrentWeather/>
          </div>
          <div className="tasks">
            <UserTasks/>
          </div>
      </div>
      <div className="forecast">
        <Forecast/>
      </div>
    </WeatherPageWrapper>
  );
};

export default WeatherPage;
