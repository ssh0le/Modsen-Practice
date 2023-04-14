import { useAppDispatch, useAppSelector } from '@hooks/storeHooks';
import { findCities } from '@store/citySearchSlice';
import React, {
  ChangeEvent,
  useState,
  MouseEvent,
  FocusEvent,
  FC,
  useRef,
} from 'react';
import Loader from '../Loader';
import CityInfo from '../CityInfo';
import {
  SearchBarContainer,
  CitiesListContainer,
  CityInput,
  CitiesList,
  NoResults,
} from './styled';
import { setGeolocation } from '@store/locationSlice';

const CitySearchBar: FC = () => {
  const [showList, setShowList] = useState(false);
  const { isLoading, results } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);

  const hasResults = results !== null && results.length > 0;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (!showList) {
      setShowList(true);
    }
    if (value.trim().length === 0) {
      setShowList(false);
    }
    dispatch(findCities(value));
  };

  const handleOnMouseDown = (event: MouseEvent<HTMLLIElement>): void =>
    event.preventDefault();

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>): void =>
    setShowList(false);

  const handleOnFocus = (event: FocusEvent<HTMLInputElement>): void => {
    if (event.target.value.trim().length !== 0) {
      setShowList(true);
    }
  };

  const handleOnClick = (latitude: number, longitude: number): void => {
    dispatch(setGeolocation({ latitude, longitude }));
    setShowList(false);
    if (ref.current !== null) {
      ref.current.value = '';
      ref.current.blur();
    }
  };

  return (
    <SearchBarContainer>
      <CityInput
        ref={ref}
        onChange={handleOnChange}
        placeholder="City"
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
      {showList && (
        <CitiesListContainer>
          <CitiesList>
            {isLoading && <Loader />}
            {!isLoading && !hasResults && <NoResults>No results</NoResults>}
            {!isLoading &&
              hasResults &&
              results.map((item, index) => (
                <CityInfo
                  onMouseDown={handleOnMouseDown}
                  onClick={handleOnClick}
                  key={index}
                  name={item.name}
                  country={item.country}
                  latitude={item.lat}
                  longitude={item.lon}
                />
              ))}
          </CitiesList>
        </CitiesListContainer>
      )}
    </SearchBarContainer>
  );
};

export default CitySearchBar;
