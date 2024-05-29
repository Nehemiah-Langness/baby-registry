import { Link, useLocation } from 'react-router-dom';
import Branding from '../assets/logo.svg?react';
import { useEffect } from 'react';

export function Navbar() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0
		})
	}, [pathname])

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
						<li className='nav-item'>
							<Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current='page' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className={`nav-link ${pathname === '/on-call' ? 'active' : ''}`} aria-current='page' to='/on-call'>
								On Call List
							</Link>
						</li>
						<li className='nav-item'>
							<Link className={`nav-link ${pathname === '/trains' ? 'active' : ''}`} aria-current='page' to='/trains'>
								Care Trains
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
