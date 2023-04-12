import styled from 'styled-components';

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 22px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
`

export const IconContainer = styled.div`
    height: 100px;
    width: 100px;
    padding: 10px;
    background-color: rgba(45, 183, 252, 0.498);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Icon = styled.img`
    height: 90%;
`
export const Temperature = styled.div`
    display: flex;
    justify-content: center;
    font-size: 27px;
    border-radius: 10px;
    padding-left: 5px;
`

export const Description = styled.p`
    margin: 0;
    width: 100%;
`
export const WeatherBody = styled.div`
`