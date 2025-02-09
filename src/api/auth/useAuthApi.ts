import { useCallback } from 'react';
import { IApiResponseData } from '@/types/common.type';
import { useHttpMethodContext } from '@/context/HttpContextProvider';
import { ILoginRequestBody, ILoginResponse, IVerifyUserRequestBody } from './auth.types';

const useAuthApi = () => {
	const { post } = useHttpMethodContext();

	const loginUser = useCallback(
		async (requestBody: ILoginRequestBody): Promise<IApiResponseData<ILoginResponse>> => {
			return await post<ILoginResponse>(`/user/login`, requestBody);
		},
		[post]
	);

	const verifyLoginUser = useCallback(
		async (requestBody: IVerifyUserRequestBody): Promise<IApiResponseData<ILoginResponse>> => {
			const response = await post<ILoginResponse>(`/user/verify-login`, requestBody);
			return response;
		},
		[post]
	);

	return { loginUser, verifyLoginUser };
};

export default useAuthApi;
