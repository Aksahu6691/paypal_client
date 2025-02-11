export interface IApiResponseData<T> {
	success: boolean;
	errorMsg: string;
	response?: T | null;
}

export interface IProduct {
	id: string;
	name: string;
	price: number;
	currency: string;
	image: string;
}
