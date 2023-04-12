import styled from 'styled-components';

interface BackgroundContainerProps {
    imageSource: string;
}

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
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
`

export const OpacityLayer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 20%;
`