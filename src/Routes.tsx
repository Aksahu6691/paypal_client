import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router';
import { APP_ROUTES } from './utils/constants';
import NotFound from './components/NotFound';
import ErrorPage from './components/routes/ErrorPage';
import AuthenticatedUserLayout from './components/routes/authenticated/AuthenticatedUserLayout';
import Dashboard from './pages/Dashboard';
import CancelPayment from './pages/CancelPayment';
import CompletePayment from './pages/CompletePayment';
import Checkout from './pages/Checkout';
import Subscription from './pages/Subscription';

const Routes = () => {
	return (
		<BrowserRouter>
			<AppRoutes>
				<Route path={APP_ROUTES.ERROR} element={<ErrorPage />} />
				<Route path="*" element={<NotFound />} />
				<Route path={APP_ROUTES.ROOT} element={<AuthenticatedUserLayout />}>
					<Route path={APP_ROUTES.ROOT} element={<Dashboard />} />
					<Route path={APP_ROUTES.APP.ROOT} element={<Dashboard />} />
					<Route path={APP_ROUTES.APP.CHECKOUT} element={<Checkout />} />
					<Route path={APP_ROUTES.APP.SUBSCRIPTION} element={<Subscription />} />
					<Route path={APP_ROUTES.APP.CANCEL_PAYMENT} element={<CancelPayment />} />
					<Route path={APP_ROUTES.APP.COMPLETE_PAYMENT} element={<CompletePayment />} />
				</Route>
			</AppRoutes>
		</BrowserRouter>
	);
};

export default Routes;
