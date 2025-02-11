export const APP_ROUTES = {
	ROOT: '/',
	ERROR: '/error',

	APP: {
		ROOT: '/app',
		CHECKOUT: '/app/checkout',
		SUBSCRIPTION: '/app/subscription',
		CANCEL_PAYMENT: '/app/cancel-payment',
		COMPLETE_PAYMENT: '/app/complete-payment'
	}
} as const;

export const NAVIGATION_ROUTES = {
	DASHBOARD: APP_ROUTES.APP.ROOT,
	CHECKOUT: APP_ROUTES.APP.CHECKOUT,
	SUBSCRIPTION: APP_ROUTES.APP.SUBSCRIPTION,
	COMPLETE_PAYMENT: APP_ROUTES.APP.COMPLETE_PAYMENT,
	CANCEL_PAYMENT: APP_ROUTES.APP.CANCEL_PAYMENT
};

export const COMMON_ERROR_MESSAGE = 'Something went wrong. Please try again later.';
