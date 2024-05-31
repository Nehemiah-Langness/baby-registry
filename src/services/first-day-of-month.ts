
export function firstDayOfMonth(date: Date) {
    const copy = new Date(date.valueOf());
    copy.setDate(1);
    return copy;
}
