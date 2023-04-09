import React, { FC } from 'react';
import ForecastListItem from '../ForecastListItem';
import { useAppSelector } from '@hooks/storeHooks';
import { selectDailyForecast } from '@store/selectors/selectForecast';
import { DailyForecastWrapper} from './styled';

const DailyForecast: FC = () => {
  const dailyForecast = useAppSelector(selectDailyForecast);
  return (
    <DailyForecastWrapper>
      {dailyForecast.map(({ time, temperature, weatherType }) => (
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
