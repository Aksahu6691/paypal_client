import { useNavigate } from 'react-router';
import CustomButton from './common/CustomButton';
import { NotFoundIcon } from '../assets/icons';
import { APP_ROUTES } from '@/utils/constants';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-center items-center h-[100vh] m-4">
			<div className="flex flex-col justify-center items-center gap-10 p-6 rounded-2xl shadow-lg bg-off-white max-h-[365px] max-w-[570px]">
				<NotFoundIcon />

				<div className="flex flex-col text-center gap-2 p-2">
					<p className="text-2xl font-semibold">Page Not Found</p>

					<p className=" text-center text-base flex flex-wrap text text-cool-grey">
						We are sorry for the inconvenience. It looks like you are trying to access a page that has been deleted or
						never existed.
					</p>
				</div>

				<CustomButton onPress={() => navigate(APP_ROUTES.ROOT)} className="bg-dark-blue text-white p-4">
					Go Back
				</CustomButton>
			</div>
		</div>
	);
};

export default NotFound;
