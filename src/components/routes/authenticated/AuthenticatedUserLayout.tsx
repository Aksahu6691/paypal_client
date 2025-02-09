import { Outlet } from 'react-router';
import Nav from '@/components/nav/Nav';

const AuthenticatedUserLayout = () => {
	return (
		<div className="min-h-screen w-full bg-white">
			<Nav />
			<div className="h-fit pt-20 scroll-auto">
				<Outlet />
			</div>
		</div>
	);
};

export default AuthenticatedUserLayout;
