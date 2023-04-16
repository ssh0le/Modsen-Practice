import React, { MouseEventHandler } from 'react';
import { SwitchContainer, SwithOption } from './styled';

interface SwitchProps {
  selectedId: number;
  onClick: (index: number) => MouseEventHandler<HTMLLIElement>;
}

function ForecastSwitch({ selectedId, onClick }: SwitchProps): JSX.Element {
  const switchOptions = ['Daily forecast', 'Hourly forecast'];
  return (
    <SwitchContainer>
      {switchOptions.map((option, index) => (
        <SwithOption
          isSelected={selectedId === index}
          key={index}
          onClick={onClick(index)}
        >
          {option}
        </SwithOption>
      ))}
    </SwitchContainer>
  );
}

export default React.memo<SwitchProps>(
  ForecastSwitch,
  (prevProps: Readonly<SwitchProps>, nextProps: Readonly<SwitchProps>) =>
    prevProps.selectedId === nextProps.selectedId
);
