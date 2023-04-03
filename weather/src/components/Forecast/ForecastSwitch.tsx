import { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  border-radius: 20px;
  background-color: #fff;
  padding: 5px;
  gap: 10px;

  li {
    padding: 5px 10px;
  }

  .selected {
    background-color: #feb56b;
  border-radius: 20px;
  }
`;

interface SwitchProps {
  selectedId: number;
  onClick: (index: number) => MouseEventHandler<HTMLLIElement>;
}

const ForecastSwitch: FC<SwitchProps> = ({ selectedId, onClick }) => {
  const switchOptions = ['Daily forecast', 'Hourly forecast'];
  return (
    <SwitchWrapper>
      {switchOptions.map((option, index) => (
        <li
          key={index}
          className={selectedId === index ? 'selected' : ''}
          onClick={onClick(index)}
        >
          {option}
        </li>
      ))}
    </SwitchWrapper>
  );
};

export default ForecastSwitch;
