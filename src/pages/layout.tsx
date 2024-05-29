import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';

export function Layout() {
    return (
        <div className='h-100 d-flex flex-column'>
            <Navbar />
            <div className='flex-grow-1 pt-5'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}


