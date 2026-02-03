import { useMemo } from 'react';
import { lastDayOfMonth } from '../../services/last-day-of-month';
import { firstDayOfMonth } from '../../services/first-day-of-month';
import { normalizeDate } from '../../services/normalize-date';
import { getMonth } from '../../services/get-month';
import { Day } from './day';

export function Calendar({
    endDate,
    startDate,
    volunteers,
    inactive,
    dueDate,
    noInactiveWeeks,
}: {
    startDate: Date;
    endDate: Date;
    dueDate: Date;
    volunteers: { date: Date; partial?: boolean; volunteers: string[] }[];
    inactive?: boolean;
    noInactiveWeeks?: boolean;
}) {
    const { end, first, last, start } = useMemo(() => {
        const normalizedStartDate = normalizeDate(startDate);
        const normalizedEndDate = normalizeDate(endDate);
        const firstDay = firstDayOfMonth(normalizedStartDate);
        const lastDay = lastDayOfMonth(normalizedEndDate);

        return {
            start: normalizedStartDate,
            end: normalizedEndDate,
            first: firstDay,
            last: lastDay,
        };
    }, [endDate, startDate]);

    const months = useMemo(() => {
        const current = new Date(first.valueOf());
        const months: Date[][][] = [];
        let weeks: Date[][] = [];
        let days: Date[] = [];
        let currentMonth = current.getMonth();

        while (current.valueOf() <= last.valueOf()) {
            if (current.getDay() === 0 && days.length) {
                weeks.push(days);
                days = [];
            }

            if (current.getMonth() !== currentMonth && weeks.length) {
                if (days.length) {
                    weeks.push(days);
                    days = [];
                }
                months.push(weeks);
                weeks = [];
                currentMonth = current.getMonth();
            }

            days.push(new Date(current.valueOf()));
            current.setDate(current.getDate() + 1);
        }

        weeks.push(days);
        months.push(weeks);

        return months;
    }, [first, last]);

    return (
        <div>
            <div className='d-flex flex-wrap'>
                <div className='d-flex mb-1 me-5'>
                    <div className='border px-3 py-1 bg-light me-2'></div> Not Needed
                </div>
                <div className='d-flex mb-1 me-5'>
                    <div className='border px-3 py-1 bg-white me-2'></div> Need Coverage
                </div>
                <div className='d-flex mb-1 me-5'>
                    <div className='border px-3 py-1 bg-danger-subtle me-2'></div> Have Partial Coverage
                </div>
                <div className='d-flex mb-1 me-5'>
                    <div className='border px-3 py-1 bg-success-subtle me-2'></div> Covered
                </div>
            </div>

            {months.map((month, i) => (
                <div key={i}>
                    <div className='h2 fw-light text-center mb-1 mt-2'>{getMonth(month[0]?.[0]?.getMonth())}</div>
                    <div className='bg-white border container position-relative'>
                        {month.map((week, ii) =>
                            week.every((d) => d < start || d > end) && noInactiveWeeks ? null : (
                                <div key={ii} className='row'>
                                    {ii === 0 && new Array(7 - week.length).fill(0).map((_x, iii) => <div key={'filler' + iii} className='col border bg-light'></div>)}
                                    {week.map((day, iii) => (
                                        <Day key={iii} date={day} end={end} start={start} dueDate={dueDate} volunteers={volunteers}></Day>
                                    ))}
                                    {ii !== 0 && new Array(7 - week.length).fill(0).map((_x, iii) => <div key={'filler' + iii} className='col border bg-light'></div>)}
                                </div>
                            )
                        )}

                        {inactive ? (
                            <div
                                className='position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center text-light align-items-center text-center'
                                style={{ background: 'rgba(var(--bs-dark-rgb), 0.75)' }}
                            >
                                We need to wait until the baby comes to schedule specific days
                            </div>
                        ) : null}
                    </div>
                </div>
            ))}
        </div>
    );
}
