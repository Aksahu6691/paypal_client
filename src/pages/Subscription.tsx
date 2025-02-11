import useAppNavigate from '@/hooks/useAppNavigate';
import ScreenWrapper from '@/components/ScreenWrapper';
import envConfig from '@/config/env.config';
import SubscriptionCard from '@/components/SubscriptionCard.tsx';
import useSubscriptionApi from '@/api/subscription/useSubscriptionApi';

const Subscription = () => {
	const navigate = useAppNavigate();
	const { createSubscription, getSubscription } = useSubscriptionApi();

	const onCreateSubscription = async (plan_id: string) => {
		const { response } = await createSubscription(plan_id);
		return response?.id ?? '';
	};

	const onApprove = async (data: any) => {
		try {
			if (!data?.orderID) throw new Error('Invalid order ID');
			const { response } = await getSubscription(data.orderID);
			console.log('response', response);
			navigate.toCompletePayment();
		} catch (error) {
			console.error('Error verifying PayPal order:', error);
			navigate.toCancelPayment();
		}
	};

	const onError = (error: any) => {
		console.error('PayPal payment error', error);
	};

	return (
		<ScreenWrapper>
			<div className="flex justify-center items-center py-20 bg-gray-100 gap-5">
				<SubscriptionCard
					planName="Premium Plan"
					price="49.99"
					currency="$"
					status="ACTIVE"
					nextBillingDate="2025-03-10"
					onCreateSubscription={() => onCreateSubscription(envConfig.PAYPAL_PLAN_ID)}
					onApprove={onApprove}
					onError={onError}
				/>
				<SubscriptionCard
					planName="Pro Plan"
					price="19.99"
					currency="$"
					status="ACTIVE"
					nextBillingDate="2025-03-10"
					onCreateSubscription={() => onCreateSubscription(envConfig.PAYPAL_PLAN_ID)}
					onApprove={onApprove}
					onError={onError}
				/>
			</div>
		</ScreenWrapper>
	);
};

export default Subscription;
