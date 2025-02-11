import { useCallback } from 'react';
import { IApiResponseData, IProduct } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { IPaypalResponse } from './paypal.types';

const usePaypalApi = () => {
	const { post, get } = useHttpMethodContext();

	const createOrder = useCallback(
		async (payload: IProduct): Promise<IApiResponseData<IPaypalResponse>> => {
			return await post<IPaypalResponse>(`/checkout/create-order`, payload);
		},
		[post]
	);

	const capturePayment = useCallback(
		async (orderId: string): Promise<IApiResponseData<IPaypalResponse>> => {
			return await get<IPaypalResponse>(`/checkout/capture-payment/${orderId}`);
		},
		[get]
	);

	return { createOrder, capturePayment };
};

export default usePaypalApi;
