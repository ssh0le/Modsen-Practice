import styled from 'styled-components';

export const SwitchContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    border-radius: 20px;
    background-color: #fff;
    padding: 5px;
    gap: 10px;
`

export const SwithOption = styled.li<{isSelected: boolean}>`
    padding: 5px 10px;
    border-radius: 20px;
    background-color: ${props => props.isSelected ? props.theme.colors.selectedSwitchOption : ""};
    text-align: center;

    /* @media screen and (max-width: 560px) {
        te
    } */
`