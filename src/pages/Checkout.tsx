import {
	PayPalButtons,
	PayPalButtonsComponentProps,
	PayPalScriptProvider,
	ReactPayPalScriptOptions
} from '@paypal/react-paypal-js';
import env from '../config/env.config';
import useAppNavigate from '@/hooks/useAppNavigate';
import { products } from '@/helpers/data';
import ScreenWrapper from '@/components/ScreenWrapper';
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import { IProduct } from '@/types/common.type';
import CustomButton from '@/components/common/CustomButton';
import useCheckoutApi from '@/api/checkout/useCheckoutApi';

const Checkout = () => {
	const navigate = useAppNavigate();
	const { createOrder, capturePayment } = useCheckoutApi();

	const [loading, setLoading] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<IProduct>();

	const initialOptions: ReactPayPalScriptOptions = {
		clientId: `${env.PAYPAL_CLIENT_ID}`
	};

	const styles: PayPalButtonsComponentProps['style'] = {
		borderRadius: 10,
		shape: 'rect',
		layout: 'vertical'
	};

	const handlePurchase = (product: IProduct) => {
		setSelectedProduct(product);
	};

	const clearProductSelection = () => {
		setSelectedProduct(undefined);
	};

	const onCreateOrder = async () => {
		if (!selectedProduct) return '';
		setLoading(true);
		const { response } = await createOrder(selectedProduct);
		setLoading(false);
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

	const renderPaymentButtons = () => {
		if (!selectedProduct) return;
		return (
			<div className="flex justify-center my-4">
				<div className="w-1/3">
					<PayPalScriptProvider options={initialOptions}>
						<PayPalButtons style={styles} createOrder={onCreateOrder} onApprove={onApprove} onError={onError} />
					</PayPalScriptProvider>
					<CustomButton
						variant="faded"
						className="w-full mt-4 shadow font-bold text-xl"
						size="lg"
						onPress={clearProductSelection}
					>
						Cancel
					</CustomButton>
				</div>
			</div>
		);
	};

	return (
		<ScreenWrapper>
			<div className="my-4">
				<ProductCard
					products={products}
					selectedProduct={selectedProduct}
					handlePurchase={handlePurchase}
					loading={loading}
				/>
			</div>
			{renderPaymentButtons()}
		</ScreenWrapper>
	);
};

export default Checkout;
