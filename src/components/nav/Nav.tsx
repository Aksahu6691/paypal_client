import { Link } from 'react-router';

const Nav = () => {
	return (
		<nav className="flex items-center justify-between p-4 shadow">
			<Link to="/" className="text-xl font-bold">
				My Project
			</Link>
			<ul className="flex items-center">
				<li className="mr-6">
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
