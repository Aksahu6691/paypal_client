import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { IPaypalResponse } from './paypal.types';

const usePaypalApi = () => {
	const { post, get } = useHttpMethodContext();

	const createOrder = useCallback(async (): Promise<IApiResponseData<IPaypalResponse>> => {
		return await post<IPaypalResponse>(`/paypal/create-order`, {});
	}, [post]);

	const capturePayment = useCallback(
		async (orderId: string): Promise<IApiResponseData<IPaypalResponse>> => {
			return await get<IPaypalResponse>(`/paypal/capture-payment/${orderId}`);
		},
		[get]
	);

	return { createOrder, capturePayment };
};

export default usePaypalApi;
