import styled from 'styled-components';
import {style} from '@global/style'

export const DailyForecastWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: ${props => props.theme.colors.forecastBackground};
    padding: 10px;
    height: 200px;

    @media screen and (max-width: 900px) {
        overflow-x: scroll;
        grid-template-columns: repeat(7, 100px);
        column-gap: 20px;
        ${style.scrollBar}
    }
`