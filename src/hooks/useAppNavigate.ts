import { useNavigate, type NavigateOptions } from 'react-router';
import { APP_ROUTES } from '../utils/constants';
import { useMemo } from 'react';

const useAppNavigate = () => {
	const navigate = useNavigate();

	const { ROOT, ERROR, APP } = APP_ROUTES;

	const typeSafeNavigate = useMemo(
		() => ({
			to: (path: string, option?: NavigateOptions) => navigate(path, option),
			goBack: (level = -1) => navigate(level),
			toError: (option?: NavigateOptions) => navigate(ERROR, option),

			// Unauthenticated routes
			toRoot: (option?: NavigateOptions) => navigate(ROOT, option),
			toDashboard: (option?: NavigateOptions) => navigate(APP.ROOT, option),
			toCheckout: (option?: NavigateOptions) => navigate(APP.CHECKOUT, option),
			toSubscription: (option?: NavigateOptions) => navigate(APP.SUBSCRIPTION, option),
			toCancelPayment: (option?: NavigateOptions) => navigate(APP.CANCEL_PAYMENT, option),
			toCompletePayment: (option?: NavigateOptions) => navigate(APP.COMPLETE_PAYMENT, option)
		}),
		[navigate, ERROR, ROOT, APP]
	);

	return typeSafeNavigate;
};

export default useAppNavigate;
