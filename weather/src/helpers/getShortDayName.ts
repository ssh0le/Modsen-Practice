export function getShortDayName(date: Date): string {
    if (date.getDay() === (new Date()).getDay()) {
        return "Today";
    } else {
        return date.toLocaleString("default", { weekday: "short" });
    }
}