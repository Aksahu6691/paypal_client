import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { ICreateSubscriptionResponse, IGetSubscriptionPayload, IGetSubscriptionResponse } from './subscription.types';

const useSubscriptionApi = () => {
	const { post } = useHttpMethodContext();

	const createSubscription = useCallback(
		async (plan_id: string): Promise<IApiResponseData<ICreateSubscriptionResponse>> => {
			return await post<ICreateSubscriptionResponse>(`/subscription/create`, { plan_id });
		},
		[post]
	);

	const approveSubscription = useCallback(
		async (payload: IGetSubscriptionPayload): Promise<IApiResponseData<IGetSubscriptionResponse>> => {
			return await post<IGetSubscriptionResponse>(`/subscription/approve`, payload);
		},
		[post]
	);

	return { createSubscription, approveSubscription };
};

export default useSubscriptionApi;
