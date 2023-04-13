import React, { FC, MouseEventHandler } from 'react';
import { SwitchContainer, SwithOption } from './style';


interface SwitchProps {
  selectedId: number;
  onClick: (index: number) => MouseEventHandler<HTMLLIElement>;
}

const ForecastSwitch: FC<SwitchProps> = ({ selectedId, onClick }) => {
  const switchOptions = ['Daily forecast', 'Hourly forecast'];
  return (
    <SwitchContainer>
      {switchOptions.map((option, index) => <SwithOption isSelected={selectedId === index} key={index} onClick={onClick(index)}>{option}</SwithOption>)}
    </SwitchContainer>
  );
};

export default ForecastSwitch;
