import volunteers from './sitters.json';

export const sitters = volunteers.map((x) => {
    const parsedDate = x.date.split('-').map((x) => +x);
    return {
        ...x,
        partial: x.slots.filter((x) => x).length < 3,
        volunteers: x.slots.map((x, i) => `${x || '(Empty)'}|${mapSlot(i)}`),
        date: new Date(parsedDate[0], parsedDate[1] - 1, parsedDate[2]),
    };
});

function mapSlot(slot: number) {
    switch (slot) {
        case 0:
            return '10pm - 6am';
        case 1:
            return '6am - 2pm';
        case 2:
            return '2pm - 10pm';
        default:
            return 'All Day';
    }
}
