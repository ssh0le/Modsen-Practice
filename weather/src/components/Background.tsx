import styled from 'styled-components';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { useAppSelector } from '@hooks/storeHooks';
import { selectCurrentForecast } from '@store/selectors/selectForecast';
import { getBackgroundImage } from '@helpers/getBackgroundImage';

interface BackgroundWrapperProps {
  imageSource: string;
}

const BackgroundWrapper = styled.div<BackgroundWrapperProps>`
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -10;
  height: 100vh;
  box-sizing: border-box;
  background-image: url(${(props) => props.imageSource});
  background-size: cover;
  background-position: center center;

  .opacity {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 20%;
  }
`;

interface BackgroundProps {
  container: HTMLElement;
}

const Background: FC<BackgroundProps> = ({ container }) => {
  const {weatherType, dayPeriod} = useAppSelector(selectCurrentForecast)
  return createPortal(
    <BackgroundWrapper imageSource={getBackgroundImage(weatherType, dayPeriod)}>
      <div className="opacity"></div>
    </BackgroundWrapper>,
    container
  );
};

export default Background;
