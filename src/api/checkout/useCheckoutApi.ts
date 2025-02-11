import { useCallback } from 'react';
import { IApiResponseData, IProduct } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { ICheckoutResponse } from './checkout.types';

const useCheckoutApi = () => {
	const { post, get } = useHttpMethodContext();

	const createOrder = useCallback(
		async (payload: IProduct): Promise<IApiResponseData<ICheckoutResponse>> => {
			return await post<ICheckoutResponse>(`/checkout/create-order`, payload);
		},
		[post]
	);

	const capturePayment = useCallback(
		async (orderId: string): Promise<IApiResponseData<ICheckoutResponse>> => {
			return await get<ICheckoutResponse>(`/checkout/capture-payment/${orderId}`);
		},
		[get]
	);

	return { createOrder, capturePayment };
};

export default useCheckoutApi;
