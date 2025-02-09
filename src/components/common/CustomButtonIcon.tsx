import { cn } from '@nextui-org/react';
import CustomButton from './CustomButton';

interface ICustomButtonIconProps {
	Icon: React.ReactNode;
	onPress: () => void;
	btnColor?: 'primary' | 'secondary' | 'success' | 'warning';
	buttonRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	variant?: 'shadow' | 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'ghost';
	className?: string;
}

const CustomButtonIcon = (props: ICustomButtonIconProps) => {
	const { Icon, onPress, btnColor = 'secondary', buttonRadius = 'full', variant = 'flat', className } = props;

	return (
		<CustomButton
			variant={variant}
			btnColor={btnColor}
			className={cn(className, 'p-0 w-auto h-auto min-w-0')}
			buttonRadius={buttonRadius}
			onPress={onPress}
		>
			{Icon}
		</CustomButton>
	);
};

export default CustomButtonIcon;
