/* eslint-disable @typescript-eslint/naming-convention */
import { createSelector } from "@reduxjs/toolkit";
import { selectDaily, selectHourly, selectTimeZone } from ".";
import { ForecastListItem, WeatherType } from "@global/types";
import { getShortDayName } from "@helpers/getShortDayName";
import { getWeatherType } from "@api/dailyForecastApi";
import { getWeatherType as getHourlyWeatherType } from "@api/hourlyForecastApi";
import { getFormattedTime } from "@helpers/getFormattedTime";
import { getTimeZonedCurrentDate } from "@helpers/getTimeZonedCurrentDate";

export const selectDailyForecast = createSelector(selectDaily, dailyForecast => {
    if (dailyForecast === undefined) {
        return [];
    }
    const array: ForecastListItem[] = [];
    dailyForecast.forEach(({ day, all_day }) => {
        array.push({
            title: getShortDayName(new Date(day)),
            weatherType: getWeatherType(all_day.icon),
            temperature: Math.round(all_day.temperature_max)
        })
    });
    return array;
});

export const selectHourlyForecast = createSelector(selectHourly, selectTimeZone, (hourlyForecast, timeZone) => {
    if (hourlyForecast === undefined) {
        return [];
    }
    const array: ForecastListItem[] = [];
    const { time, temperature_2m, weathercode } = hourlyForecast;
    const today = getTimeZonedCurrentDate(timeZone);
    const index = time.findIndex(item => {
        const forecastDate = new Date(item);
        return forecastDate.getHours() === today.getHours() && forecastDate.getDate() === today.getDate();
    });
    for (let i = 0; i < 24; i++) {
        array.push({
            title: getFormattedTime(new Date(time[index + i])),
            weatherType: getHourlyWeatherType(weathercode[index + i]),
            temperature: Math.round(temperature_2m[index + i])
        })
    }
    return array;
})

export const selectTodayForecast = createSelector(selectDaily, dailyForecast => {
    if (dailyForecast === undefined) {
        return {
            weatherType: WeatherType.Unknown,
            temperature: 0,
            summary: "No info"
        };
    }
    const todayForecast = dailyForecast[0];
    return {
        weatherType: getWeatherType(todayForecast.icon),
        temperature: Math.round(todayForecast.all_day.temperature_max),
        summary: todayForecast.summary
    }
})