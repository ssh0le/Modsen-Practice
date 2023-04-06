export function getFormattedTime(date: Date): string {
    if (date.getHours() === new Date().getHours()) {
      return 'Now';
    }
    return `${date.getHours()}:00`;
  }