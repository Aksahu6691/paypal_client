import { create } from 'zustand';

interface IAppState {
	isAppLoading: boolean;
	setIsAppLoading: (isAppLoading: boolean) => void;
	isUserLoggedIn: boolean;
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
	accessToken?: string;
	setAccessToken: (accessToken: string) => void;
}

const useAppStore = create<IAppState>(set => ({
	isAppLoading: false,
	setIsAppLoading: (isAppLoading: boolean) => set({ isAppLoading }),
	isUserLoggedIn: false,
	setIsUserLoggedIn: (isUserLoggedIn: boolean) => set({ isUserLoggedIn }),
	accessToken: '',
	setAccessToken: (accessToken: string) => set({ accessToken })
}));

export default useAppStore;
