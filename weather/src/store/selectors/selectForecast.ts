/* eslint-disable @typescript-eslint/naming-convention */
import { createSelector} from "@reduxjs/toolkit";
import { selectDaily, selectHourly } from ".";
import { ForecastListItem } from "@global/types";
import { getShortDayName } from "@helpers/getShortDayName";
import { getWeatherType } from "@api/dailyForecastApi";
import { getWeatherType as getHourlyWeatherType } from "@api/hourlyForecastApi";
import { getFormattedTime } from "@helpers/getFormattedTime";


export const selectDailyForecast = createSelector(selectDaily, dailyForecast => {
    if (dailyForecast === undefined) {
        return [];
    }
    const array: ForecastListItem[] = []; 
    dailyForecast.forEach(({day, all_day}) => {
        array.push({
            title: getShortDayName(new Date(day)),
            weatherType: getWeatherType(all_day.icon),
            temperature: Math.round(all_day.temperature_max)
        })
    });
    return array;
});

export const selectHourlyForecast = createSelector(selectHourly, hourlyForecast => {
    if (hourlyForecast === undefined) {
        return [];
    }
    const array: ForecastListItem[] = [];
    const {time, temperature_2m, weathercode} = hourlyForecast;
    const today = new Date();
    const currentHours = today.getHours();
    const currentDay = today.getDate();
    const index = time.findIndex(item => {
        const forecastDate = new Date(item);
        return forecastDate.getHours() === currentHours && forecastDate.getDate() === currentDay;
    });
    console.log(index);
    for (let i = 0; i < 24; i++) {
        array.push({
            title: getFormattedTime(new Date(time[index + i])),
            weatherType: getHourlyWeatherType(weathercode[index + i]),
            temperature: Math.round(temperature_2m[index + i])
        })
    }
    return array;
})

