import { Link, useLocation } from 'react-router-dom';
import Branding from '../assets/logo.svg?react';
import { useEffect } from 'react';
import { NavLink } from './nav-link';

export function Navbar() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [pathname]);

    return (
        <nav className='navbar bg-primary navbar-expand-lg' data-bs-theme='dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='https://n-lang.dev'>
                    <Branding height='3rem' />
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <NavLink label='Home' location={pathname} to='/' />
                        {/* <NavLink label='On Call List' location={pathname} to='/on-call' /> */}
                        <NavLink label='Meal Trains' location={pathname} to='/meal-train' />
                        <NavLink label='Yard Work' location={pathname} to='/yard-work' />
                        <NavLink label='Registry' location={pathname} to='/registry' />
                    </ul>
                </div>
            </div>
        </nav>
    );
}


