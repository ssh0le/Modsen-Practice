export function getTimeZonedCurrentDate(timeZone: string | undefined): Date {
    if (timeZone === undefined || timeZone === "") {
        return new Date();
    }
    return new Date(new Date().toLocaleString('en-US', {
        timeZone
    }));
}