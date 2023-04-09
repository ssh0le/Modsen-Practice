import React, { FC, MouseEvent } from 'react';
import { City, Country, CityInfoContainer } from './styled';

interface CityInfoProps {
  name: string;
  country: string;
  onClick: (event: MouseEvent<HTMLLIElement>) => void;
  onMouseDown: (event: MouseEvent<HTMLLIElement>) => void;
}

const CityInfo: FC<CityInfoProps> = ({ name, country, onClick, onMouseDown }) => {
  return (
    <CityInfoContainer onClick={onClick} onMouseDown={onMouseDown}>
      <Country>{country}, </Country>
      <City>{name}</City>
    </CityInfoContainer>
  );
};

export default CityInfo;
