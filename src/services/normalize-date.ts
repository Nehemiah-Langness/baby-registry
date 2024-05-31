
export function normalizeDate(date: Date) {
    const copy = new Date(date.valueOf());
    copy.setHours(0, 0, 0, 0);
    return copy;
}
