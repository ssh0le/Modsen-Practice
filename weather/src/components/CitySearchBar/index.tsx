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

  let hasResults = false;
  if (results !== null) {
    if (results.length > 0) {
      hasResults = true;
    }
  }

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
    if (event.target.value.trim().length !== 0){
      setShowList(true);
    }
  }

  const handleOnClickListItem = (
    event: MouseEvent<HTMLLIElement>,
    latitude: number,
    longitude: number
  ): void => {
    event.preventDefault();
    dispatch(setGeolocation({ latitude, longitude }));
    setShowList(false);
    if (ref.current !== null) {
      ref.current.value = '';
      ref.current.blur();
    }
  };

  let listContent;

  if (results === null || isLoading) {
    listContent = <Loader />;
  } else {
    listContent = !hasResults ? (
      <NoResults>No results</NoResults>
    ) : (
      results.map((item, index) => (
        <CityInfo
          onMouseDown={handleOnMouseDown}
          onClick={(event) => handleOnClickListItem(event, item.lat, item.lon)}
          key={index}
          name={item.name}
          country={item.country}
        />
      ))
    );
  }

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
          <CitiesList>{listContent}</CitiesList>
        </CitiesListContainer>
      )}
    </SearchBarContainer>
  );
};

export default CitySearchBar;
