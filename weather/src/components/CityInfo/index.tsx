import React, { FC, MouseEvent } from 'react';
import { City, Country, CityInfoContainer } from './styled';
import { useAppDispatch } from '@hooks/storeHooks';
import { setSelectedCity } from '@store/citySearchSlice';

interface CityInfoProps {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  onClick: (latitude: number, longitued: number) => void;
  onMouseDown: (event: MouseEvent<HTMLLIElement>) => void;
}

// memo

const CityInfo: FC<CityInfoProps> = ({
  name,
  country,
  latitude,
  longitude,
  onClick,
  onMouseDown,
}) => {
  const dispatch = useAppDispatch();
  const handleOnClick = (): void => {
    onClick(latitude, longitude);
    dispatch(setSelectedCity(name));
  };
  return (
    <CityInfoContainer onClick={handleOnClick} onMouseDown={onMouseDown}>
      <Country>{country}, </Country>
      <City>{name}</City>
    </CityInfoContainer>
  );
};

export default CityInfo;
