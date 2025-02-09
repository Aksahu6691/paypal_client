import { Spinner } from '@nextui-org/react';
import useAppStore from '@/store/appStore';

const AuthLoading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const showApiLoader = useAppStore(state => state.isAppLoading);

	return (
		<div>
			{showApiLoader && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<Spinner />
				</div>
			)}
			{children}
		</div>
	);
};

export default AuthLoading;
