import { create } from 'zustand';

interface IAppState {
	isAppLoading: boolean;
	setIsAppLoading: (isAppLoading: boolean) => void;
}

const useAppStore = create<IAppState>(set => ({
	isAppLoading: false,
	setIsAppLoading: (isAppLoading: boolean) => set({ isAppLoading })
}));

export default useAppStore;
