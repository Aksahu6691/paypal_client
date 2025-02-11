import { Link, useLocation } from 'react-router';
import { NAVIGATION_ROUTES } from '@/utils/constants';
import { cn } from '@nextui-org/react';

const Nav = () => {
	const { pathname } = useLocation();

	const renderDesktopNavigation = () => {
		return Object.entries(NAVIGATION_ROUTES).map(([key, route]) => (
			<Link
				key={key}
				to={route}
				className={cn(
					'hover:text-pink-400 transition-colors text-black',
					pathname === route && 'font-bold text-pink-purple'
				)}
			>
				{key.charAt(0) + key.slice(1).toLowerCase()}
			</Link>
		));
	};

	return (
		<nav className="flex items-center justify-between p-4 shadow">
			<Link to="/" className="text-xl font-bold">
				My Project
			</Link>
			<div className="hidden md:flex gap-5 justify-between">{renderDesktopNavigation()}</div>
		</nav>
	);
};

export default Nav;
