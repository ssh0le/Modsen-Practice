import styled from 'styled-components';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';

interface BackgroundWrapperProps {
  imageSource: string;
}

const BackgroundWrapper = styled.div<BackgroundWrapperProps>`
  width: 100vw;
  position: relative;
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
    opacity: 30%;
  }
`;

interface BackgroundProps extends BackgroundWrapperProps {
  container: HTMLElement;
}

const Background: FC<BackgroundProps> = ({ imageSource, container }) => {
  return createPortal(
    <BackgroundWrapper imageSource={imageSource}>
      <div className="opacity"></div>
    </BackgroundWrapper>,
    container
  );
};

export default Background;
