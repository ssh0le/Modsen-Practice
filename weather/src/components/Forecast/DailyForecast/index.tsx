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
      {!isLoading && dailyForecast.map(({ title, temperature, weatherType }) => (
        <ForecastListItem
          key={title}
          title={title}
          weatherType={weatherType}
          temperature={temperature}
        />
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
