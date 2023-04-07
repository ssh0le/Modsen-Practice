/* eslint-disable @typescript-eslint/naming-convention */
import { createSelector } from "@reduxjs/toolkit";
import { selectDaily, selectHourly, selectSunrises, selectSunsets, selectTimeZone } from ".";
import { DayForecast, DayPeriod, HourForecast, WeatherType } from "@global/types";
import { getShortDayName } from "@helpers/getShortDayName";
import { getWeatherType } from "@api/dailyForecastApi";
import { getWeatherType as getHourlyWeatherType } from "@api/hourlyForecastApi";
import { getFormattedTime } from "@helpers/getFormattedTime";
import { getTimeZonedCurrentDate } from "@helpers/getTimeZonedCurrentDate";
import { isSameDates } from "@helpers/isSameDates";
import { getDayPeriod } from "@helpers/getDayPeriod";

export const selectDailyForecast = createSelector(selectDaily, dailyForecast => {
    if (dailyForecast === undefined) {
        return [];
    }
    const array: DayForecast[] = [];
    dailyForecast.forEach(({ day, all_day }) => {
        array.push({
            time: getShortDayName(new Date(day)),
            weatherType: getWeatherType(all_day.icon),
            temperature: Math.round(all_day.temperature_max)
        })
    });
    return array;
});

export const selectHourlyForecast = createSelector(selectHourly, selectTimeZone, selectSunrises, selectSunsets, (hourlyForecast, timeZone, sunrises, sunsets) => {
    if (hourlyForecast === undefined) {
        return [];
    }
    const array: HourForecast[] = [];
    const { time: dates, temperature_2m, weathercode } = hourlyForecast;
    const today = getTimeZonedCurrentDate(timeZone);
    const timeIndex = dates.findIndex(item => {
        const forecastDate = new Date(item);
        return forecastDate.getHours() === today.getHours() && forecastDate.getDate() === today.getDate();
    });
    const sunIndex = sunrises?.findIndex(item => isSameDates(today, new Date(item)));
    for (let i = 0; i < 24; i++) {
        const time = new Date(dates[timeIndex + i]);
        let dayPeriod = DayPeriod.Day;
        if (sunrises !== undefined && sunsets !== undefined&& sunIndex !== undefined) {
            dayPeriod = getDayPeriod(new Date(sunrises[sunIndex]), new Date(sunsets[sunIndex]), time);
        }
        array.push({
            time: getFormattedTime(time),
            weatherType: getHourlyWeatherType(weathercode[timeIndex + i]),
            temperature: Math.round(temperature_2m[timeIndex + i]),
            dayPeriod 
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