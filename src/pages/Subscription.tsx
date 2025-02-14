import useAppNavigate from '@/hooks/useAppNavigate';
import ScreenWrapper from '@/components/ScreenWrapper';
import SubscriptionCard from '@/components/SubscriptionCard.tsx';
import useSubscriptionApi from '@/api/subscription/useSubscriptionApi';
import showToast from '@/utils/showToast';

const Subscription = () => {
	const navigate = useAppNavigate();
	const { createSubscription, approveSubscription } = useSubscriptionApi();

	const onCreateSubscription = async (plan_id: string) => {
		const { response } = await createSubscription(plan_id);
		console.log('response', response?.subscriptionID);
		return response?.subscriptionID ?? '';
	};

	const onApprove = async (data: any) => {
		try {
			if (!data?.orderID && !data?.subscriptionID) throw new Error('Invalid order ID');
			const { success, response } = await approveSubscription({
				orderID: data?.orderID,
				subscriptionID: data?.subscriptionID
			});
			// TODO: Will use this data and remove it
			console.log('onApprove_response', response);
			if (success) {
				showToast('Subscription approved successfully', 'success');
				navigate.toCompletePayment();
				return;
			}
			showToast('Subscription approval failed', 'error');
			navigate.toCancelPayment();
		} catch (error) {
			console.error('Error verifying PayPal order:', error);
			showToast('Subscription approval failed', 'error');
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
					onCreateSubscription={() => onCreateSubscription('P-5TM75584XM932990WM6W3C5Q')}
					onApprove={onApprove}
					onError={onError}
				/>
				<SubscriptionCard
					planName="Pro Plan"
					price="19.99"
					currency="$"
					status="ACTIVE"
					nextBillingDate="2025-03-10"
					onCreateSubscription={() => onCreateSubscription('P-2RV75789U95525918M6VP2YY')}
					onApprove={onApprove}
					onError={onError}
				/>
			</div>
		</ScreenWrapper>
	);
};

export default Subscription;
