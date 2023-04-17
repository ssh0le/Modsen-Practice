import { getTimeZonedDate } from "./getTimeZonedDate";

export function getTimeZonedCurrentDate(timeZone: string | undefined): Date {
    if (timeZone === undefined || timeZone === "") {
        return new Date();
    }
    return getTimeZonedDate(new Date(), timeZone);
}