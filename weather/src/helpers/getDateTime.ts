import { DateTime } from "@global/types";

export function getDateTime(date: Date): DateTime {
    return {
      hours: date.getHours(),
      minutes: ('0' + String(date.getMinutes())).slice(-2),
      dayWeek: date.toLocaleDateString('en-EN', { weekday: 'long' }),
      monthName: date.toLocaleString('default', { month: 'long' }),
      monthDay: date.getDate(),
      year: date.getFullYear(),
    };
  }