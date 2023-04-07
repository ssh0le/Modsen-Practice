import React, { FC } from 'react';
import ForecastListItem from '../ForecastListItem';
import { useAppSelector } from '@hooks/storeHooks';
import { selectDailyForecast } from '@store/selectors/selectForecast';
import Loader from '@components/Loader';
import { DailyForecastWrapper, LoaderContainer } from './styled';

const DailyForecast: FC = () => {
  const dailyForecast = useAppSelector(selectDailyForecast);
  const isLoading = useAppSelector((state) => state.forecast.isLoading);
  return (
    <DailyForecastWrapper>
      {isLoading && <LoaderContainer><Loader/></LoaderContainer>}
      {!isLoading && dailyForecast.map(({ time, temperature, weatherType }) => (
        <ForecastListItem
          key={time}
          title={time}
          weatherType={weatherType}
          temperature={temperature}
        />
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
