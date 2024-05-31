import { SubHeader } from '../components/sub-header';
import { DetailSection } from '../components/detail-section';
import { DetailText } from '../components/detail-text';
import { useMemo } from 'react';

const onCallStartDate = new Date(2024, 6, 14);
const onCallEndDate = new Date(2024, 7, 24);

export default function OnCall() {
    return (
        <>
            <div className='d-flex flex-column align-items-center py-5'>
                <div className='display-5 mb-4'>On Call and Baby-Sitting Schedule</div>
            </div>

            <div className='bg-white'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>Volunteer Categories</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>
                            <b>On Call Tier 1</b>: Someone who is willing to receive a call during set days and times and and arrive at our house in under 15 to 20 minutes and
                            watch the kids for up to 2 hours
                        </DetailText>
                        <DetailText>
                            <b>On Call Tier 2</b>: Someone who is willing to receive a call during set days and times and head to our house with an arrival window under 2 hours and
                            watch the kids for up to 8 hours
                        </DetailText>
                        <DetailText>
                            <b>Baby Sitter</b>: Someone who is willing to block out pre-scheduled days and times to come watch the kids in 8-hour blocks
                        </DetailText>
                    </DetailSection>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='text-center pb-5'>
                        <SubHeader>How this works</SubHeader>
                    </div>
                    <DetailSection>
                        <DetailText>
                            When it is time for us to head to the hospital, we'll call whoever is scheduled for being on-call as a tier 1 volunteer so we can get on the road as
                            soon as possible.
                        </DetailText>
                        <DetailText>
                            Once we know a tier 1 volunteer is coming to watch the kids, we'll call the scheduled tier 2 volunteer so they can relieve the tier 1 volunteer when
                            they are able.
                        </DetailText>
                        <DetailText>
                            The tier 2 volunteer will have access to the next scheduled sitter's time slot and contact information so they can make plans to hand-off baby-sitting
                            duty.
                        </DetailText>
                        <DetailText>
                            Each subsequent baby sitter will follow the same process of contacting the next person in line and coordinating timing for switching places.
                        </DetailText>
                    </DetailSection>
                </div>
            </div>
            <div className='bg-white'>
                <div className='container py-5'>
                    <Calendar endDate={onCallEndDate} startDate={onCallStartDate} />
                </div>
            </div>
        </>
    );
}

const currentVolunteers = [
    {
        date: new Date(2024, 6, 18),
        partial: true
    },
    {
        date: new Date(2024, 6, 19)
    },
    {
        date: new Date(2024, 6, 20)
    },
    {
        date: new Date(2024, 6, 21),
        partial: true
    },
    {
        date: new Date(2024, 7, 3),
        partial: true
    },
    {
        date: new Date(2024, 7, 4)
    },
    {
        date: new Date(2024, 7, 5)
    },
    {
        date: new Date(2024, 7, 6)
    },
    {
        date: new Date(2024, 7, 7)
    },
    {
        date: new Date(2024, 7, 8)
    },
    {
        date: new Date(2024, 7, 9)
    },
    {
        date: new Date(2024, 7, 10)
    },
    {
        date: new Date(2024, 7, 11)
    },
    {
        date: new Date(2024, 7, 12)
    },
    {
        date: new Date(2024, 7, 13)
    },
    {
        date: new Date(2024, 7, 14)
    },
    {
        date: new Date(2024, 7, 15)
    },
    {
        date: new Date(2024, 7, 16)
    },
    {
        date: new Date(2024, 7, 17)
    },
    {
        date: new Date(2024, 7, 18)
    },
    {
        date: new Date(2024, 7, 19)
    },
    {
        date: new Date(2024, 7, 20)
    },
    {
        date: new Date(2024, 7, 21)
    },
    {
        date: new Date(2024, 7, 22)
    },
    {
        date: new Date(2024, 7, 23)
    },
    {
        date: new Date(2024, 7, 24)
    },
]


function Calendar({ endDate, startDate }: { startDate: Date; endDate: Date }) {
   
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
            <div className='d-flex mb-1'>
                <div className='border px-3 py-1 bg-light me-2'></div> Not Needed
            </div>
            <div className='d-flex mb-1'>
                <div className='border px-3 py-1 me-2'></div> Need Coverage
            </div>
            <div className='d-flex mb-1'>
                <div className='border px-3 py-1 bg-success-subtle me-2'></div> Covered
            </div>

            {months.map((month, i) => (
                <div key={i}>
                    <div className='display-5 text-center mb-1 mt-2'>{getMonth(month[0]?.[0]?.getMonth())}</div>
                    <div className='bg-white border container overflow-hidden'>
                        {month.map((week, ii) => (
                            <div key={ii} className='row'>
                                {ii === 0 && new Array(7 - week.length).fill(0).map((_x, iii) => <div key={'filler' + iii} className='col border bg-light'></div>)}
                                {week.map((day, iii) => (
                                    <div
                                        key={iii}
                                        className={`col border ${day.valueOf() < start.valueOf() || day.valueOf() > end.valueOf() ? 'bg-light text-secondary' : currentVolunteers.find(x => x.date.valueOf() === day.valueOf()) ? 'bg-success-subtle': ''}`}
                                        style={{ aspectRatio: 3 / 2 }}
                                    >
                                        <span className='fs-18'>{day.getDate()}</span>
                                    </div>
                                ))}
                                {ii !== 0 && new Array(7 - week.length).fill(0).map((_x, iii) => <div key={'filler' + iii} className='col border bg-light'></div>)}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function getMonth(month?: number) {
    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
        default:
            return '';
    }
}

function normalizeDate(date: Date) {
    const copy = new Date(date.valueOf());
    copy.setHours(0, 0, 0, 0);
    return copy;
}

function firstDayOfMonth(date: Date) {
    const copy = new Date(date.valueOf());
    copy.setDate(1);
    return copy;
}

function lastDayOfMonth(date: Date) {
    const copy = new Date(date.valueOf());
    copy.setMonth(copy.getMonth() + 1, 0);
    return copy;
}
