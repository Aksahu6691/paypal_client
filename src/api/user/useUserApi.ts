import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { IUserResponse } from './user.types';

const useUserApi = () => {
	const { get } = useHttpMethodContext();

	const getUser = useCallback(
		async (id?: string): Promise<IApiResponseData<IUserResponse[]>> => {
			const endpoint = id ? `/user/get/${id}` : `/user/get`;
			return await get<IUserResponse[]>(endpoint);
		},
		[get]
	);

	return { getUser };
};

export default useUserApi;
