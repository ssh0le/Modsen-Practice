import React, { FC } from 'react';
import { City, Country, CityInfoContainer } from './styled';

interface CityInfoProps {
  name: string;
  country: string;
}

const CityInfo: FC<CityInfoProps> = ({ name, country }) => {
  return (
    <CityInfoContainer>
      <City>{name}</City>
      <Country>{country}</Country>
    </CityInfoContainer>
  );
};

export default CityInfo;
