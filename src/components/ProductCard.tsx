import CustomCard from './common/CustomCard';
import CustomButton from './common/CustomButton';
import { IProduct } from '@/types/common.type';

interface IProductCardProps {
	products: IProduct[];
	selectedProduct?: IProduct;
	handlePurchase: (product: IProduct) => void;
	loading: boolean;
}

const ProductCard = (props: IProductCardProps) => {
	const { products, selectedProduct, handlePurchase, loading } = props;
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
			{products.map(product => (
				<CustomCard key={product.id} shadow="lg" className="p-4">
					<img src={product.image} alt={product.name} className="w-full h-40 object-fill rounded-md" />
					<div>
						<h2 className="text-lg font-semibold mt-2">{product.name}</h2>
						<p className="text-gray-600">
							${product.price} {product.currency}
						</p>
						<CustomButton
							variant={selectedProduct?.id == product.id ? 'solid' : 'faded'}
							className="mt-4 w-full"
							onPress={() => handlePurchase(product)}
							isDisabled={loading}
						>
							{loading ? 'Processing...' : 'Buy Now'}
						</CustomButton>
					</div>
				</CustomCard>
			))}
		</div>
	);
};

export default ProductCard;
