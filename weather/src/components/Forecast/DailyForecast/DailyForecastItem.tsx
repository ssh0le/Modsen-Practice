import { FC } from "react";
import styled from "styled-components";
import { WeatherType } from "../../../global/types";
import { getWeatherIcon } from "../../../helpers/getWeatherIcon";

const DailyForecastItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-grow: 1;

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
    date: Date,
    weatherType: WeatherType,
    temperature: number
}

const DailyForecastItem: FC<DailyForecastItemProps> = ({date, weatherType, temperature}) => {

    return(
        <DailyForecastItemWrapper>
            <div className="day-name">
                {getShortDayName(date)}
            </div>
            <div className="weather-icon">
                <img src={getWeatherIcon(weatherType)} alt="" />
            </div>
            <div className="temperature">
                {temperature}°
            </div>
        </DailyForecastItemWrapper>
    )
}

export default DailyForecastItem;

// helpers

function getShortDayName(date: Date): string {
    if (date.getDay() === (new Date()).getDay()) {
        return "Today";
    } else {
        return date.toLocaleString("default", { weekday: "short" });
    }
}