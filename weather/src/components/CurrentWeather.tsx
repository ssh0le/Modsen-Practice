import styled from 'styled-components';
import { getWeatherIcon } from '../helpers/getWeatherIcon';
import React from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { selectTodayForecast } from '@store/selectors/selectForecast';

const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 22px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);

    .weather-icon {
        height: 100px;
        width: 100px;
        padding: 10px;
        background-color: rgba(45, 183, 252, 0.498);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .weather-icon img {
        height: 90%;
    }
    .current-temperature {
        display: flex;
        justify-content: center;
        font-size: 27px;
        border-radius: 10px;
        padding-left: 5px;
    }

    .description {
        margin: 0;
        width: 100%;
    }
`;

const CurrentWeather = () => {
  const {weatherType, temperature, summary} = useAppSelector(selectTodayForecast);
  return (
    <WeatherWrapper>
      <div className='weather-body'>
        <div className="weather-icon">
          <img src={getWeatherIcon(weatherType)} alt="" />
        </div>
        <div className="current-temperature">{temperature}°</div>
      </div>
      <p className="description">{summary}</p>
    </WeatherWrapper>
  );
};

export default CurrentWeather;
