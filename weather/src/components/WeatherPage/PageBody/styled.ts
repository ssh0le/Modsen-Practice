import styled from 'styled-components';

export const BodyContainer = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 900px){
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
`

export const CurrentWeatherContainer = styled.div`
    max-width: 40%;

    @media screen and (max-width: 900px){
        max-width: 80%;
    }
`

export const EventsContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 560px){
        width: 100%;
    }
`