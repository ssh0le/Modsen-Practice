import styled from 'styled-components';
import {style} from "@global/style"

export const CalendarContainer = styled.div`
    display: flex;
    font-size: 19px;
    padding: 20px;
    width:100%;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 560px) {
        padding: 0;
    }
`

export const MessageContainer = styled.div`
    text-align: center;
`

export const Button = styled.button`
    padding: 4px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
`

export const Message = styled.p`
    color: ${props => props.theme.colors.font};
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    color: ${props => props.theme.colors.font};
    height: 150px;
    overflow-y: scroll;
    ${style.scrollBar}
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
`
export const OptionButton = styled(Button)`
    font-size: 18px;
` 

export const NoResults = styled.div`
    width: 100%;
    text-align: center;
`