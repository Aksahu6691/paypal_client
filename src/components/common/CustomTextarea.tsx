import { cn, Textarea } from '@nextui-org/react';

interface ICustomTextareaProps {
	className?: string;
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	labelColor?: string;
	label: string;
	placeholder?: string;
	labelPlacement?: 'outside' | 'outside-left' | 'inside';
	value?: string;
	defaultValue?: string;
	name?: string;
	isDisabled?: boolean;
	isReadOnly?: boolean;
	variant?: 'flat' | 'faded' | 'bordered' | 'underlined';
	isRequired?: boolean;
	isClearable?: boolean;
	onClear?: () => void;
	minRows?: number;
	maxRows?: number;
	disableAutosize?: boolean;
	isInvalid?: boolean;
	errorMessage?: string;
	Description?: React.ReactNode;
	StartContent?: React.ReactNode;
	EndContent?: React.ReactNode;
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	onBlur?: React.FocusEventHandler<HTMLInputElement> & ((e: React.FocusEvent<HTMLInputElement, Element>) => void);
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CustomTextarea = (props: ICustomTextareaProps) => {
	const {
		className,
		color,
		labelColor = 'primary',
		label,
		placeholder,
		radius,
		labelPlacement,
		value,
		defaultValue,
		name,
		isDisabled,
		isReadOnly,
		variant,
		isRequired,
		isClearable,
		onClear,
		minRows,
		maxRows,
		disableAutosize,
		onBlur,
		isInvalid,
		errorMessage,
		Description,
		StartContent,
		EndContent,
		onChange
	} = props;

	return (
		<Textarea
			classNames={{
				base: cn(className),
				label: cn('after:text-warning', `text-${labelColor}`, isInvalid && `!text-${labelColor}`),
				errorMessage: cn('text-danger font-semibold')
			}}
			label={label}
			color={color}
			placeholder={placeholder}
			labelPlacement={labelPlacement}
			radius={radius}
			name={name}
			value={value}
			defaultValue={defaultValue}
			isDisabled={isDisabled}
			isReadOnly={isReadOnly}
			variant={variant}
			onBlur={onBlur}
			isRequired={isRequired}
			isClearable={isClearable}
			onClear={onClear}
			minRows={minRows}
			maxRows={maxRows}
			disableAutosize={disableAutosize}
			isInvalid={isInvalid}
			errorMessage={errorMessage}
			description={Description}
			startContent={StartContent}
			endContent={EndContent}
			onChange={onChange}
		/>
	);
};

export default CustomTextarea;
