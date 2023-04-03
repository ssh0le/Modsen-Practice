import { FC } from "react";
import styled from "styled-components";
import { WeatherType } from "../../global/types";
import { getWeatherIcon } from "../../helpers/getWeatherIcon";

const ForecastItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .day-name {
        background-color: white;
        display: flex;
        width: fit-content;
        padding: 5px 10px;
        border-radius: 20px;
    }

    .weather-icon {
        height: 40%;
    }

    .weather-icon img {
        height: 100%;
    }
`

interface DailyForecastItemProps {
    title: string,
    weatherType: WeatherType,
    temperature: number
}

const ForecastListItem: FC<DailyForecastItemProps> = ({title, weatherType, temperature}) => {

    return(
        <ForecastItemWrapper>
            <div className="day-name">
                {title}
            </div>
            <div className="weather-icon">
                <img src={getWeatherIcon(weatherType)} alt="" />
            </div>
            <div className="temperature">
                {temperature}°
            </div>
        </ForecastItemWrapper>
    )
}

export default ForecastListItem;
