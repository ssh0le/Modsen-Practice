import React, { FC } from 'react';
import CurrentDateTime from '@components/CurrentDateTime';
import CurrentLocation from '@components/CurrentLocation';
import CitySearchBar from '@components/CitySearchBar';
import {
  HeaderContainer,
  LocalityContainer,
  SearchBarContainer,
} from './styled';

const PageHeader: FC = () => {
  return (
    <HeaderContainer>
      <LocalityContainer>
        <CurrentDateTime />
        <CurrentLocation />
      </LocalityContainer>
      <SearchBarContainer>
        <CitySearchBar />
      </SearchBarContainer>
    </HeaderContainer>
  );
};

export default PageHeader;
