import {
	PayPalButtons,
	PayPalButtonsComponentProps,
	PayPalScriptProvider,
	ReactPayPalScriptOptions
} from '@paypal/react-paypal-js';
import env from '../config/env.config';
import usePaypalApi from '@/api/paypal/usePaypalApi';
import useAppNavigate from '@/hooks/useAppNavigate';

const Dashboard = () => {
	const { createOrder, capturePayment } = usePaypalApi();
	const navigate = useAppNavigate();

	const initialOptions: ReactPayPalScriptOptions = {
		clientId: `${env.PAYPAL_CLIENT_ID}`
	};

	const styles: PayPalButtonsComponentProps['style'] = {
		borderRadius: 10,
		shape: 'rect',
		layout: 'vertical'
	};

	const onCreateOrder = async () => {
		const { response } = await createOrder();
		return response?.orderId ?? '';
	};

	const onApprove = async (data: any) => {
		try {
			if (!data?.orderID) throw new Error('Invalid order ID');
			const { response } = await capturePayment(data.orderID);
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
		<div className="App">
			<div>
				<h2>Select Plan</h2>
				<p>
					<strong>Free:</strong> Limited features
				</p>
				<p>
					<strong>Pro:</strong> Access all features for $50
				</p>
			</div>
			<PayPalScriptProvider options={initialOptions}>
				<PayPalButtons
					style={styles}
					createOrder={onCreateOrder}
					onApprove={onApprove}
					onError={onError}
					// fundingSource="paypal"
				/>
			</PayPalScriptProvider>
		</div>
	);
};

export default Dashboard;
