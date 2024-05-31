import { useMemo, useState } from 'react';

export function Day({ date, end, start, volunteers }: { date: Date; start: Date; end: Date; volunteers: { date: Date; partial?: boolean; volunteers: string[] }[] }) {
    const coverage = useMemo(() => volunteers.find((x) => x.date.valueOf() === date.valueOf()), [date, volunteers]);

    const [active, setActive] = useState(false);

    const state = useMemo(() => {
        if (date.valueOf() < start.valueOf() || date.valueOf() > end.valueOf()) {
            return 'out-of-range';
        }

        if (coverage?.partial) {
            return 'partial';
        }

        if (coverage) {
            return 'covered';
        }

        return 'coverage-needed';
    }, [coverage, date, end, start]);

    const isInteractableState = !active && ['covered', 'coverage-needed', 'partial'].includes(state);

    return (
        <div
            className={`col border ${
                state === 'out-of-range'
                    ? 'bg-light text-secondary'
                    : state === 'covered'
                    ? 'bg-success-subtle border-success-subtle'
                    : state === 'partial'
                    ? 'bg-danger-subtle border-danger-subtle'
                    : 'bg-white'
            } calendar-day ${active ? 'active' : ''} ${isInteractableState ? 'hoverable' : ''}`}
            onClick={isInteractableState ? () => setActive(true) : undefined}
        >
            {active ? (
                <>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <span className='fs-18'>{date.getDate()}</span>
                        </div>
                        <div>
                            <button type='button' className='btn btn-close' onClick={() => setActive(false)}></button>
                        </div>
                    </div>
                    <div>
                        {coverage?.volunteers.map((volunteer, i) => (
                            <div key={i} className='d-flex justify-content-between' style={{ maxWidth: '15rem' }}>
                                <div className='fw-bold'>{volunteer.split('|')[1]}</div>
                                <div>{volunteer.split('|')[0]}</div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <span className='fs-18'>{date.getDate()}</span>
                    <div className='d-none d-lg-block'>
                        {distinct(coverage?.volunteers ?? []).map(({ key: volunteer, values: instances }, i) => (
                            <div key={i} className='d-flex justify-content-between' style={{ maxWidth: '15rem' }}>
                                <div>{volunteer.split('|')[0]}</div>
                                <b>{`${instances.length} slot${instances.length === 1 ? '' : 's'}`}</b>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function distinct(list: string[]) {
    const distinct = Object.entries(list.reduce((c, n) => ({ ...c, [n.split('|')[0]]: (c[n.split('|')[0]] ?? []).concat(n) }), {} as { [index: string]: string[] })).map(
        ([key, values]) => ({ key, values })
    );
    console.log(distinct);
    return distinct;
}
