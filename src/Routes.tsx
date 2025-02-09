import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router';
import { APP_ROUTES } from './utils/constants';
import NotFound from './components/NotFound';
import ErrorPage from './components/routes/ErrorPage';
import AuthenticatedUserLayout from './components/routes/authenticated/AuthenticatedUserLayout';
import Dashboard from './pages/Dashboard';

const Routes = () => {
	return (
		<BrowserRouter>
			<AppRoutes>
				<Route path={APP_ROUTES.ERROR} element={<ErrorPage />} />
				<Route path="*" element={<NotFound />} />
				<Route path={APP_ROUTES.ROOT} element={<AuthenticatedUserLayout />}>
					<Route path={APP_ROUTES.ROOT} element={<Dashboard />} />
				</Route>
			</AppRoutes>
		</BrowserRouter>
	);
};

export default Routes;
