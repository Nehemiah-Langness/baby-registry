import { Link } from 'react-router-dom';
import { memo } from 'react';

export const NavLink = memo(({ location, to, label }: { location: string; to: string; label: string; }) => (
	<li className='nav-item'>
		<Link className={`nav-link ${location === to ? 'active' : ''}`} aria-current={location === to ? 'page' : undefined} to={to}>
			{label}
		</Link>
	</li>
));
