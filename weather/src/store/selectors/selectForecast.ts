/* eslint-disable @typescript-eslint/naming-convention */
import { createSelector } from "@reduxjs/toolkit";
import { selectDaily } from ".";
import { ForecastListItem } from "@global/types";
import { getShortDayName } from "@helpers/getShortDayName";
import { getWeatherType } from "@api/dailyForecastApi";


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

