import { DayPeriod } from "@global/types";

export function getDayPeriod(sunrise: Date, sunset: Date, date: Date): DayPeriod {
    if (sunrise.getHours() <= date.getHours() && sunset.getHours() >= date.getHours()) {
        return DayPeriod.Day;
    } else {
        return DayPeriod.Night;
    }
}