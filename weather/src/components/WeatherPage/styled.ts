import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 40px;
`

const PageRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled(PageRow)`
`

export const Body = styled(PageRow)`
    align-items: flex-start;
`

export const LocalityContainer = styled.div`
    font-size: 20px;
`

export const SearchBarContainer = styled.div`
`

export const CurrentWeatherContainer = styled.div`
    max-width: 40%;
`

export const EventsContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const ForecastContainer = styled.div`
`