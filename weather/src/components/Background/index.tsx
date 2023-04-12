import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { useAppSelector } from '@hooks/storeHooks';
import { selectCurrentForecast } from '@store/selectors/selectForecast';
import { getBackgroundImage } from '@helpers/getBackgroundImage';
import { BackgroundContainer, OpacityLayer } from './styled';

interface BackgroundProps {
  container: HTMLElement;
}

const Background: FC<BackgroundProps> = ({ container }) => {
  const { weatherType, dayPeriod } = useAppSelector(selectCurrentForecast);
  return createPortal(
    <BackgroundContainer
      imageSource={getBackgroundImage(weatherType, dayPeriod)}
    >
      <OpacityLayer />
    </BackgroundContainer>,
    container
  );
};

export default Background;
