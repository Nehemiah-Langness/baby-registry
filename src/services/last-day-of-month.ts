
export function lastDayOfMonth(date: Date) {
    const copy = new Date(date.valueOf());
    copy.setMonth(copy.getMonth() + 1, 0);
    return copy;
}
