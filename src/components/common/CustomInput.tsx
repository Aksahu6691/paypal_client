import React from 'react';
import { cn, Input } from '@nextui-org/react';
import colors from '@/themes/colors';

interface ICustomInputProps {
	label: string;
	labelColor?: keyof typeof colors;
	name: string;
	className?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	description?: React.ReactNode;
	StartContent?: React.ReactNode;
	EndContent?: React.ReactNode;
	type?: 'text' | 'search' | 'url' | 'tel' | 'email' | 'password' | 'file' | 'date' | 'time' | 'week';
	color?: 'danger' | 'primary' | 'secondary' | 'success' | 'warning';
	variant?: 'bordered' | 'flat' | 'faded' | 'underlined';
	errorMessage?: string;
	placeholder?: string;
	isDisabled?: boolean;
	isRequired?: boolean;
	isInvalid?: boolean;
	labelPlacement?: 'inside' | 'outside' | 'outside-left';
	radius?: 'full' | 'lg' | 'md' | 'sm' | 'none';
	size?: 'lg' | 'md' | 'sm';
	maxLength?: number;
}

const CustomInput = (props: ICustomInputProps) => {
	const {
		label,
		name,
		className,
		value,
		onChange,
		onBlur,
		type,
		color = 'primary',
		variant = 'bordered',
		placeholder,
		description,
		StartContent,
		EndContent,
		errorMessage,
		isRequired = false,
		isDisabled = false,
		isInvalid = false,
		labelPlacement,
		radius,
		labelColor = 'gray',
		size,
		maxLength = 255
	} = props;

	return (
		<Input
			classNames={{
				base: cn(className),
				label: cn(
					`text-${labelColor}`,
					{
						'text-slate-grey': isDisabled
					},
					isInvalid && `!text-${labelColor}`
				),
				errorMessage: 'text-danger font-medium text-start',
				input: cn({ '!text-danger': isInvalid })
			}} // Add default classes according to figma
			label={label}
			name={name}
			onBlur={onBlur}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			type={type}
			description={description}
			startContent={StartContent}
			endContent={EndContent}
			isRequired={isRequired}
			isDisabled={isDisabled}
			isInvalid={isInvalid}
			errorMessage={errorMessage}
			color={color}
			variant={variant}
			labelPlacement={labelPlacement}
			radius={radius}
			size={size}
			maxLength={maxLength}
		/>
	);
};

export default CustomInput;
