export function getTimeZonedCurrentDate(timeZone: string | undefined): Date {
    if (timeZone === undefined) {
        return new Date();
    }
    return new Date(new Date().toLocaleString('en-US', {
        timeZone
    }));
}