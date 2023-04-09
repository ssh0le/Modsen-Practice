import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { findCities } from '@store/citySearchSlice';
import React, { ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import CityInfo from './CityInfo';

const SearchBarWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 5px;
  justify-content: flex-end;
  flex-wrap: wrap;

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
  .cities-list-container {
    width: 100%;
    position: relative;
  }
  .cities-list {
    position: absolute;
  }
`;

const CitySearchBar = () => {
  const dispatch = useAppDispatch();
  const { isLoading, results } = useAppSelector((state) => state.search);
  let isShowList = isLoading;
  let hasResults = false;
  if (results !== null) {
    isShowList = true;
    if (results.length > 0) {
      hasResults = true;
    }
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(findCities(event.target.value));
  };

  useEffect(() =>)

  return (
    <SearchBarWrapper>
      <input
        type="text"
        id="city-search"
        placeholder="Minsk"
        onChange={handleOnChange}
      />
      {isShowList && (
        <div className="cities-list-container">
          <ul className="cities-list">
            {isLoading && <Loader />}
            {!isLoading && !hasResults && <li>No results</li>}
            {!isLoading && hasResults && results.map(item => <CityInfo key={item.lat*item.lon} name={item.name} country={item.country}/>)}
            </ul>
        </div>
      )}
    </SearchBarWrapper>
  );
};

export default CitySearchBar;
