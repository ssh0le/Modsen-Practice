import './App.css';
import React from 'react';
import styled from 'styled-components';
import WeatherPage from './components/WeatherPage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/index';

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
`;

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppWrapper>
          <div className="content">
            <WeatherPage />
          </div>
        </AppWrapper>
      </PersistGate>
    </Provider>
  );
}

export default App;
