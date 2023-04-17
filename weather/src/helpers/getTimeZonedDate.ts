export function getTimeZonedDate(date: Date, timeZone: string | undefined): Date {
    if (timeZone === undefined || timeZone === "") {
        return date;
    }
    return new Date(date.toLocaleString('en-US', {
        timeZone
    }));
}