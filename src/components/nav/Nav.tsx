import { Link } from 'react-router';

const Nav = () => {
	return (
		<nav className="flex items-center justify-between p-4 shadow">
			<Link to="/" className="text-xl font-bold">
				My Project
			</Link>
			<ul className="flex items-center">
				<li className="mr-6">
					<Link to="/app">Dashboard</Link>
				</li>
				<li className="mr-6">
					<Link to="/app/cancel-payment">Cancel Payment</Link>
				</li>
				<li>
					<Link to="/app/complete-payment">Completed Payment</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
