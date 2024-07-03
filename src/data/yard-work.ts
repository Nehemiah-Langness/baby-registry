import volunteers from './yard-work.json';

export const yardWork = volunteers.map((x) => {
    const parsedDate = x.date.split('-').map((x) => +x);
    return {
        ...x,
        date: new Date(parsedDate[0], parsedDate[1] - 1, parsedDate[2]),
    };
});
