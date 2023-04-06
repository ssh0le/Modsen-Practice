import styled from 'styled-components';
import ForecastListItem from './ForecastListItem';
import React from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { selectHourlyForecast } from '@store/selectors/selectForecast';

const HourlyForecastWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  padding: 10px;
  background-color: rgba(153, 220, 254, 0.854);
  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(153, 220, 254, 0.854);
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  & > * {
    width: 10%;
  }
`;

const HourlyForecast = () => {
  const hourlyForeast = useAppSelector(selectHourlyForecast);
  return (
    <HourlyForecastWrapper>
      {hourlyForeast.map(({ title, temperature, weatherType }) => (
        <ForecastListItem
          key={title}
          title={title}
          weatherType={weatherType}
          temperature={temperature}
        />
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;
