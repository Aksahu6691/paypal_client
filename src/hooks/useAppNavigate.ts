import { useNavigate, type NavigateOptions } from 'react-router';
import { APP_ROUTES } from '../utils/constants';
import { useMemo } from 'react';

const useAppNavigate = () => {
	const navigate = useNavigate();

	const { ROOT, ERROR } = APP_ROUTES;

	const typeSafeNavigate = useMemo(
		() => ({
			to: (path: string, option?: NavigateOptions) => navigate(path, option),
			goBack: (level = -1) => navigate(level),
			toError: (option?: NavigateOptions) => navigate(ERROR, option),

			// Unauthenticated routes
			toRoot: (option?: NavigateOptions) => navigate(ROOT, option)
		}),
		[navigate, ERROR, ROOT]
	);

	return typeSafeNavigate;
};

export default useAppNavigate;
