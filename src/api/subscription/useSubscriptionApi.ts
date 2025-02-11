import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { ICreateSubscriptionResponse, IGetSubscriptionResponse } from './subscription.types';

const useSubscriptionApi = () => {
	const { post, get } = useHttpMethodContext();

	const createSubscription = useCallback(
		async (plan_id: string): Promise<IApiResponseData<ICreateSubscriptionResponse>> => {
			return await post<ICreateSubscriptionResponse>(`/subscription/create`, { plan_id });
		},
		[post]
	);

	const getSubscription = useCallback(
		async (id: string): Promise<IApiResponseData<IGetSubscriptionResponse>> => {
			return await get<IGetSubscriptionResponse>(`/subscription/get/${id}`);
		},
		[get]
	);

	return { createSubscription, getSubscription };
};

export default useSubscriptionApi;
