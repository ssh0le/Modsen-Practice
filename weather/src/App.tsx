import './App.css';
import React from 'react';
import WeatherPage from './components/WeatherPage';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/index';


function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WeatherPage />
      </PersistGate>
    </Provider>
  );
}

export default App;
