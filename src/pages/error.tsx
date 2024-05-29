import { Link, useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError();

    if ((error as { status?: number }).status === 404) {
        return <div className='d-flex justify-content-center align-items-center h-100'>
            <div className="p-5 bg-white rounded-2 text-center">
                <span className='display-5'>You seem to be lost</span>
                <div className='mt-3'>
                    <Link to="/">Find your way back home</Link>
                </div>
            </div>
        </div>
    }

    return (
        <>
            <span className='display-5'>Error</span>
            {JSON.stringify(error)}
        </>
    );
}
