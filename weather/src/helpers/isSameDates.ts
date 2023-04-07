export function isSameDates(a: Date, b: Date): boolean {
    return getReversed(a) === getReversed(b);
}

function getReversed(date: Date): string {
    return date.toLocaleDateString().split('/').reverse().join();
}