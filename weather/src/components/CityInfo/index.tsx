import React, { FC, MouseEvent } from 'react';
import { City, Country, CityInfoContainer } from './styled';

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
  const handleOnClick = (): void => onClick(latitude, longitude);
  return (
    <CityInfoContainer onClick={handleOnClick} onMouseDown={onMouseDown}>
      <Country>{country}, </Country>
      <City>{name}</City>
    </CityInfoContainer>
  );
};

export default CityInfo;
