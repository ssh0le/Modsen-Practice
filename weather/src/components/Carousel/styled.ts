import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
  width: 100%;
  overflow: hidden;
`

export const ItemsContainer = styled.div`
display: flex;
  transition: transform 0.5s ease-in-out;
  
`

export const CarouselItem = styled.div`
    flex: 0 0 100%;
`

export const ArrowContainer = styled.div`
    position: absolute;
`