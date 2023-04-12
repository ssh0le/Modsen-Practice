import styled from 'styled-components';
import React, { useState } from 'react';
import UserTask from './UserEvent';
import { getEvents } from '@api/calendarApi';


const TaskWrapper = styled.div`
  display: flex;
  font-size: 20px;
  padding: 20px;

  .message {
    text-align: center;
  }

  .sign-in-button {
    padding: 4px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
  }

  .user-events {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

interface UserTaskExample {
  start: string;
  end: string;
  info: string;
}
const UserTasks = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  const clickHandler = () => {
    setIsSignedIn(true);
    const request = getEvents(arr => console.log(arr), () => console.log('error'));
    request.then(data => console.log(data))
    .catch(err => console.log(err));
  };

  if (!isSignedIn) {
    return (
      <TaskWrapper>
        <div className="message">
          <p>
            Do you have planes for today?<br></br>Let’s check!
          </p>
          <button className="sign-in-button" onClick={clickHandler}>
            Sign in with Google
          </button>
        </div>
      </TaskWrapper>
    );
  }

  const tasksExample: UserTaskExample[] = [
    {
      start: '8:00',
      end: '10:00',
      info: 'Wake up',
    },
    {
      start: '12:00',
      end: '12:00',
      info: 'Meet up',
    },
    {
      start: '15:00',
      end: '15:00',
      info: 'Movie time',
    },
    {
      start: '15:00',
      end: '15:00',
      info: 'Movie time',
    },
    {
      start: '15:00',
      end: '15:00',
      info: 'Movie time',
    },
    {
      start: '15:00',
      end: '15:00',
      info: 'Movie time hsa d jasghd ashgd asdh gasjdgh asjd gh',
    },
    {
      start: '15:00',
      end: '15:00',
      info: 'Movie time',
    },
  ];
  return (
    <TaskWrapper>
      <div className="user-events">
        {tasksExample.map((task, index) => (
          <UserTask
            start={task.start}
            end={task.end}
            info={task.info}
            key={index}
          />
        ))}
      </div>
    </TaskWrapper>
  );
};

export default UserTasks;
