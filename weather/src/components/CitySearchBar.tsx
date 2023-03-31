import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 5px;
  justify-content: flex-end;

  #search-button,
  #city-search {
    font-size: 16px;
    padding: 5px;
  }

  #city-search {
    border-radius: 5px;
    width: 150px;
  }
  #search-button {
    background-color: white;
    border-radius: 20%;
  }
`;

const CitySearchBar = () => {
  return (
    <SearchBarWrapper>
      <input type="text" id="city-search" placeholder="Minsk" />
      <button id="search-button">Find</button>
    </SearchBarWrapper>
  );
};

export default CitySearchBar;
