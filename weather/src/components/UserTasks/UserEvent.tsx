import styled from 'styled-components';
import React, { FC } from 'react';

const UserEventWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  .time {
    border-radius: 20px;
    background-color: #f8a059;
    padding: 4px;
    text-align: center;
    width: 60px;
  }
  .info {
    max-width: 300px;
  }
`;

interface UserEventProps {
  start: string;
  end: string;
  info: string;
}

const UserEvent: FC<UserEventProps> = ({ start, end, info }) => {
  const time = start;
  return (
    <UserEventWrapper>
      <div className="time-container">
        <div className="time">{time}</div>
      </div>
      <div className="info">{info}</div>
    </UserEventWrapper>
  );
};

export default UserEvent;
