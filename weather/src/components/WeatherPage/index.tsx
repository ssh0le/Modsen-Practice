import Background from '../Background';
import Forecast from '../Forecast';
import React, { FC } from 'react';
import {
  PageContainer,
  ForecastContainer,
  PageContent,
  LoadingPageContent,
} from './styled';
import PageHeader from './PageHeader';
import PageBody from './PageBody';
import Loader from '@components/Loader';
import { useAppSelector } from '@hooks/storeHooks';
import { useGeolocation } from '@hooks/useGeolocation';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme} from '@styles/themes';
import { selectCurrentForecast } from '@store/selectors/selectForecast';
import { DayPeriod } from '@global/types';

const WeatherPage: FC = () => {
  useGeolocation();
  const fetchTime = useAppSelector((state) => state.forecast.fetchTime);
  const {dayPeriod} = useAppSelector(selectCurrentForecast);
  if (fetchTime === null) {
    return (
      <LoadingPageContent>
        <Loader />
      </LoadingPageContent>
    );
  }
  return (
    <ThemeProvider theme={dayPeriod === DayPeriod.Day ? lightTheme : darkTheme}>
      <PageContainer>
        <Background
          container={document.getElementById('background') as HTMLElement}
        />
        <PageContent>
          <PageHeader />
          <PageBody />
          <ForecastContainer>
            <Forecast />
          </ForecastContainer>
        </PageContent>
      </PageContainer>
    </ThemeProvider>
  );
};

export default WeatherPage;
