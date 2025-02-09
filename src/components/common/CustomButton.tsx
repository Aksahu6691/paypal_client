import { Button, cn } from '@nextui-org/react';
import React from 'react';

interface ICustomButtonProps {
	children: React.ReactNode;
	className?: string;
	onPress?: () => void;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'shadow' | 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'ghost';
	isLoading?: boolean;
	LoaderSpinner?: React.ReactNode;
	StartIcon?: React.ReactNode;
	EndIcon?: React.ReactNode;
	isDisabled?: boolean;
	btnColor?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	buttonRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	size?: 'sm' | 'md' | 'lg';
}

const CustomButton = (props: ICustomButtonProps) => {
	const {
		children,
		className,
		onPress,
		variant,
		LoaderSpinner,
		StartIcon,
		EndIcon,
		type = 'button',
		isLoading = false,
		isDisabled = false,
		btnColor = 'primary',
		buttonRadius,
		size
	} = props;

	return (
		<Button
			className={cn(className)}
			isDisabled={isDisabled}
			isLoading={isLoading}
			spinner={LoaderSpinner}
			variant={variant}
			type={type}
			onPress={onPress}
			startContent={StartIcon}
			endContent={EndIcon}
			color={btnColor}
			radius={buttonRadius}
			size={size}
		>
			{!isLoading && children}
		</Button>
	);
};

export default CustomButton;
