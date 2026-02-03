import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export function Day({
    date,
    end,
    start,
    volunteers,
    dueDate,
}: {
    date: Date;
    start: Date;
    end: Date;
    dueDate?: Date;
    volunteers: { date: Date; partial?: boolean; volunteers: string[] }[];
}) {
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
            className={`col border calendar-day d-flex flex-column ${
                active
                    ? 'active '
                    : state === 'out-of-range'
                      ? 'bg-light text-secondary'
                      : state === 'covered'
                        ? 'bg-success-subtle border-success-subtle'
                        : state === 'partial'
                          ? 'bg-danger-subtle border-danger-subtle'
                          : 'bg-white'
            } ${isInteractableState ? 'hoverable' : ''}`}
            onClick={isInteractableState ? () => setActive(true) : undefined}
        >
            {active ? (
                <div
                    className={`d-flex flex-column flex-grow-1 border shadow-sm overflow-hidden rounded ${
                        state === 'out-of-range'
                            ? 'bg-light text-secondary'
                            : state === 'covered'
                              ? 'bg-success-subtle'
                              : state === 'partial'
                                ? 'bg-danger-subtle'
                                : 'bg-light'
                    }`}
                >
                    <div className='d-flex justify-content-between align-items-start p-3'>
                        <div>
                            <span className='display-1'>
                                {date.getDate()} {dueDate?.valueOf() === date.valueOf() ? <span className='text-primary fw-bold display-5'>Due Date!</span> : null}{' '}
                            </span>
                        </div>
                        <div className='align-self-center'>Volunteers</div>
                        <div>
                            <button type='button' className='btn btn-close' onClick={() => setActive(false)}></button>
                        </div>
                    </div>

                    {!coverage?.volunteers.length ? (
                        <div className='d-flex align-items-center justify-content-center flex-grow-1 bg-white '>
                            <Link to={'/sign-up'}>We have no volunteers for this day - would you like to sign-up?</Link>
                        </div>
                    ) : (
                        <div className='bg-white flex-grow-1 py-2 px-4 overflow-auto'>
                            {coverage?.volunteers.map((volunteer, i) => {
                                const [name, ...slots] = volunteer.split('|');
                                const slot = slots.join('|');
                                return (
                                    <div key={i} className='d-flex justify-content-between'>
                                        {!!slot && <div className='fw-bold'>{slot}</div>}
                                        <div>{name}</div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <div className='d-flex align-items-center justify-content-center gap-2 fs-18'>
                        {dueDate?.valueOf() === date.valueOf() ? (
                            <div
                                style={{ height: '1em', width: '1em', background: 'var(--bs-primary-bg-subtle)' }}
                                className='rounded-circle d-flex align-items-center justify-content-center'
                            >
                                <FontAwesomeIcon style={{ fontSize: '0.8em' }} className='text-primary' icon={faBaby} />
                            </div>
                        ) : null}{' '}
                        {date.getDate()}
                    </div>
                    <div className='d-none d-lg-block'>
                        {distinct(coverage?.volunteers ?? []).map(({ key: volunteer, values: instances }, i) => (
                            <div key={i} className='d-flex justify-content-between fs-12' style={{ maxWidth: '15rem' }}>
                                <div>{volunteer.split('|')[0]}</div>
                                {instances.length > 1 && <b>{`${instances.length} slot${instances.length === 1 ? '' : 's'}`}</b>}
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
    return distinct;
}
