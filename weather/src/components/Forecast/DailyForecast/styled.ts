import styled from 'styled-components';

export const DailyForecastWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: ${props => props.theme.colors.forecastBackground};
    padding: 10px;
    height: 200px;

    @media screen and (max-width: 1000px) {
        
    }
`