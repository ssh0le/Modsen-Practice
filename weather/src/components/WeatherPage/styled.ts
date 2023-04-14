import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100vh;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10vh;
`

export const LoadingPageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const PageContent = styled.div`
    width: 90%;
    max-width: 1200px;
    display: flex;
    padding: 40px;
    gap: 40px;
    justify-content: space-between;
    border-radius: 5px;
    box-sizing: border-box;
    flex-direction: column;
    background-color: ${props => props.theme.colors.contentBackground};
`

export const ForecastContainer = styled.div`
`