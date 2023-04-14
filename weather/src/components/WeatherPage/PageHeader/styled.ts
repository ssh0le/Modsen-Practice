import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LocalityContainer = styled.div`
    font-size: 20px;
    & * {
        color: ${props => props.theme.colors.font}
    }
`

export const SearchBarContainer = styled.div`
`