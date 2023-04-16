import React, { FC, useEffect, useState } from 'react';
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
  const [src, setSrc] = useState("");

  useEffect(() => {
    const src = getBackgroundImage(weatherType, dayPeriod);
    const img = new Image();
    img.src = src;
    img.onload = () => setSrc(src);
  }, [weatherType])

  return createPortal(
    <BackgroundContainer
      imageSource={src}
    >
      <OpacityLayer />
    </BackgroundContainer>,
    container
  );
};

export default Background;
