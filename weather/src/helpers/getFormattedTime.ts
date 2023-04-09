export function getFormattedTime(date: Date, currentDate: Date): string {
    if (date.getHours() === currentDate.getHours()) {
      return 'Now';
    }
    return `${date.getHours()}:00`;
  }