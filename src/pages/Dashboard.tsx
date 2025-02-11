import CustomButton from '@/components/common/CustomButton';
import CustomCard from '@/components/common/CustomCard';
import useAppNavigate from '@/hooks/useAppNavigate';

const Dashboard = () => {
	const navigate = useAppNavigate();

	return (
		<div className="flex justify-center items-center h-screen">
			<CustomCard shadow="lg" className="p-6 rounded-xl w-96">
				<div className="text-center">
					<h2 className="text-xl font-semibold text-green-500">Welcome to My Project</h2>
					<p className="text-gray-600 mt-2">
						This is a project that I have been working on to practice my skills in web development. It is a simple
						website that allows users to purchase products and pay sample payment using PayPal.
					</p>
					<div className="flex justify-center gap-4">
						<CustomButton size="sm" variant="faded" className="mt-2" onPress={() => navigate.toCheckout()}>
							Go to checkout
						</CustomButton>
						<CustomButton size="sm" variant="faded" className="mt-2" onPress={() => navigate.toSubscription()}>
							Go to subscription
						</CustomButton>
					</div>
				</div>
			</CustomCard>
		</div>
	);
};

export default Dashboard;
