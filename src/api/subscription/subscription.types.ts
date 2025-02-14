export interface ICreateSubscriptionResponse {
	subscriptionID: string;
	plan_id: string;
	status: string;
}

export interface IGetSubscriptionPayload {
	orderID: string;
	subscriptionID: string;
}

export interface IGetSubscriptionResponse {
	subscriptionID: string;
	status: string;
	start_time: string;
	next_billing_time: string;
}
