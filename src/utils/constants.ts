export const APP_ROUTES = {
	ROOT: '/',
	ERROR: '/error',
	DASHBOARD: '/dashboard',

	APP: {
		ROOT: '/app',
		DASHBOARD: '/app/dashboard',
		CANCEL_PAYMENT: '/app/cancel-payment',
		COMPLETE_PAYMENT: '/app/complete-payment'
	}
} as const;

export const COMMON_ERROR_MESSAGE = 'Something went wrong. Please try again later.';
