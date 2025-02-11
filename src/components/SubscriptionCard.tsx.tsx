import {
	PayPalButtons,
	PayPalButtonsComponentProps,
	PayPalScriptProvider,
	ReactPayPalScriptOptions
} from '@paypal/react-paypal-js';
import CustomCard from './common/CustomCard';
import envConfig from '@/config/env.config';

interface ISubscriptionCardProps {
	planName: string;
	price: string;
	currency: string;
	status: string;
	nextBillingDate?: string;
	onCreateSubscription: () => Promise<string>;
	onApprove: (data: any) => Promise<void>;
	onError?: (error: any) => void;
}

const SubscriptionCard = (props: ISubscriptionCardProps) => {
	const { planName, price, currency, status, nextBillingDate, onCreateSubscription, onApprove, onError } = props;

	const initialOptions: ReactPayPalScriptOptions = {
		clientId: `${envConfig.PAYPAL_CLIENT_ID}`,
		vault: true,
		intent: 'capture',
		enableFunding: 'paylater'
	};

	const styles: PayPalButtonsComponentProps['style'] = {
		shape: 'rect',
		layout: 'vertical'
	};

	return (
		<CustomCard shadow="lg" className="bg-white rounded-2xl p-6 w-80 border border-gray-200">
			<h3 className="text-lg font-semibold text-gray-800">{planName}</h3>
			<p className="text-2xl font-bold mt-2">
				{currency} {price} <span className="text-sm text-gray-500">/ month</span>
			</p>

			<div className="mt-4">
				<span
					className={`px-3 py-1 text-sm font-semibold rounded-full ${
						status === 'ACTIVE' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
					}`}
				>
					{status}
				</span>
			</div>

			{nextBillingDate && (
				<p className="text-gray-500 text-sm mt-2">
					Next Billing: <span className="font-medium">{nextBillingDate}</span>
				</p>
			)}

			<div className="mt-4">
				<PayPalScriptProvider options={initialOptions}>
					<PayPalButtons
						style={styles}
						createSubscription={onCreateSubscription}
						onApprove={onApprove}
						onError={onError}
					/>
				</PayPalScriptProvider>
			</div>
		</CustomCard>
	);
};

export default SubscriptionCard;
