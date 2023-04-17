import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  height: fit-content;
  justify-content: center;
  align-content: flex-end;
  flex-wrap: wrap;
`;

export const CityInput = styled.input`
    font-size: 16px;
    padding: 5px;
    border-radius: 3px;
    width: 170px;
`

export const CitiesListContainer = styled.div`
    width: 100%;
    position: relative;
    top: -10;
`

export const CitiesList = styled.ul`
    z-index: 9;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    background-color: white;
`

export const NoResults = styled.li`
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 5px;
    justify-content: center;
`