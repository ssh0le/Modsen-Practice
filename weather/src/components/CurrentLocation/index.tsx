import React, { FC } from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { selectLocationInfo } from '@selectors/selectLocation';
import { CurrentLocationContainer } from './styled';

const CurrentLocation:FC = () => {
  const locationInfo = useAppSelector(selectLocationInfo);
  const selectedCity = useAppSelector(state => state.search.selectedCity);
  let city = locationInfo?.city;
  if (locationInfo?.city === "" && selectedCity !== null) {
    city = selectedCity;
  }
  return (
    <CurrentLocationContainer>
      {city}, {locationInfo?.countryName}
    </CurrentLocationContainer>
  );
};

export default CurrentLocation;
