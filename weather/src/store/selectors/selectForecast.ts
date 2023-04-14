/* eslint-disable @typescript-eslint/naming-convention */
import { createSelector } from "@reduxjs/toolkit";
import { selectDaily, selectHourly, selectSunrises, selectSunsets, selectTimeZone, selectToday } from ".";
import { DayForecast, DayPeriod, HourForecast, WeatherType } from "@global/types";
import { getShortDayName } from "@helpers/getShortDayName";
import { getDailyWeatherType } from "@helpers/getDailyWetherType";
import { getHourlyWeatherType } from "@helpers/getHourlyWeatherType";
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
            weatherType: getDailyWeatherType(all_day.icon),
            temperature: Math.round(all_day.temperature_max)
        })
    });
    return array;
});

export const selectTimeZonedDate = createSelector(selectTimeZone, timeZone => getTimeZonedCurrentDate(timeZone));

const selectSunRiseAndSet = createSelector(selectSunrises, selectSunsets, selectTimeZonedDate, (sunrises, sunsets, today) => {
    const sunIndex = sunrises?.findIndex(item => isSameDates(today, new Date(item)));
    if (sunIndex !== undefined && sunsets !== undefined && sunrises !== undefined) {
        return { sunset: sunsets[sunIndex], sunrise: sunrises[sunIndex] };
    }
    return null;
})

export const selectHourlyForecast = createSelector(selectHourly, selectTimeZonedDate, selectSunRiseAndSet, (hourlyForecast, today, sunPeriod) => {
    if (hourlyForecast === undefined) {
        return [];
    }
    const array: HourForecast[] = [];
    const { time: dates, temperature_2m, weathercode } = hourlyForecast;
    const timeIndex = dates.findIndex(item => {
        const forecastDate = new Date(item);
        return forecastDate.getHours() === today.getHours() && forecastDate.getDate() === today.getDate();
    });
    for (let i = 0; i < 24; i++) {
        const time = new Date(dates[timeIndex + i]);
        let dayPeriod = DayPeriod.Day;
        if (sunPeriod !== null) {
            dayPeriod = getDayPeriod(new Date(sunPeriod.sunrise), new Date(sunPeriod.sunset), time);
        }
        array.push({
            time: getFormattedTime(time, today),
            weatherType: getHourlyWeatherType(weathercode[timeIndex + i]),
            temperature: Math.round(temperature_2m[timeIndex + i]),
            dayPeriod
        })
    }
    return array;
})

export const selectCurrentForecast = createSelector(selectHourlyForecast, selectToday, (hourlyForecast, today) => {
    if (hourlyForecast === undefined || hourlyForecast.length === 0 || today === undefined) {
        return {
            weatherType: WeatherType.Unknown,
            temperature: 0,
            summary: "No info",
            dayPeriod: DayPeriod.Day,
        };
    }
    const currentForecast = hourlyForecast[0];
    return {
        weatherType: currentForecast.weatherType,
        temperature: currentForecast.temperature,
        summary: today.summary,
        dayPeriod: currentForecast.dayPeriod
    }
})