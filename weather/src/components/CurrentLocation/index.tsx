import React, { FC } from 'react';
import { useAppSelector } from '@hooks/storeHooks';
import { selectLocationInfo } from '@selectors/selectLocation';
import { CurrentLocationContainer } from './styled';

const CurrentLocation:FC = () => {
  const locationInfo = useAppSelector(selectLocationInfo);
  return (
    <CurrentLocationContainer>
      {locationInfo?.city}, {locationInfo?.countryName}
    </CurrentLocationContainer>
  );
};

export default CurrentLocation;
