import './App.css';
import React from 'react';
import styled from 'styled-components';
import WeatherPage from './components/WeatherPage';
import {Provider} from 'react-redux';
import {store} from './redux'

const AppWrapper = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .content {
    width: 90%;
    max-width: 1200px;
    display: flex;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: rgba(243, 243, 243, 0.85);
  }
`


function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppWrapper>
      <div className="content">
        <WeatherPage/>
      </div>
    </AppWrapper>
    </Provider>
  );
}

export default App;
