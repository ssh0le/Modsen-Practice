import styled from 'styled-components';
import { getWeatherIcon } from '../helpers/getWeatherIcon';
import { WeatherType } from '../global/types';

const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 22px;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);

    .weather-icon {
        height: 100px;
        width: 100px;
        padding: 10px;
        background-color: rgba(45, 183, 252, 0.498);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .weather-icon img {
        height: 90%;
    }
    .current-temperature {
        display: flex;
        justify-content: center;
        font-size: 27px;
        border-radius: 10px;
        padding-left: 5px;
    }

    .description {
        margin: 0;
    }
`;

const CurrentWeather = () => {
  const currentWeatherType = WeatherType.ClearSky;
  const currentTemperature = 8;
  const description = 'Overcast all day, rain is possible';
  return (
    <WeatherWrapper>
      <div className='weather-body'>
        <div className="weather-icon">
          <img src={getWeatherIcon(currentWeatherType)} alt="" />
        </div>
        <div className="current-temperature">{currentTemperature}°</div>
      </div>
      <p className="description">{description}</p>
    </WeatherWrapper>
  );
};

export default CurrentWeather;
