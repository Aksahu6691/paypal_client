import CustomButton from '@/components/common/CustomButton';
import CustomCard from '@/components/common/CustomCard';
import useAppNavigate from '@/hooks/useAppNavigate';

const CancelPayment = () => {
	const navigate = useAppNavigate();

	return (
		<div className="flex justify-center items-center h-screen">
			<CustomCard shadow="lg" className="p-6 rounded-xl w-96">
				<div className="text-center">
					<h2 className="text-xl font-semibold text-red-500">Payment Cancelled</h2>
					<p className="text-gray-600 mt-2">Your payment was not completed. If this was a mistake, please try again.</p>
					<CustomButton size="sm" variant="faded" className="mt-2" onPress={() => navigate.toDashboard()}>
						Back to home
					</CustomButton>
				</div>
			</CustomCard>
		</div>
	);
};

export default CancelPayment;
