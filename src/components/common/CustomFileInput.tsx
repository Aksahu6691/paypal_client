import React from 'react';
import { cn } from '@nextui-org/react';
import { FileSelectIcon } from '@/assets/icons';
import colors from '@/themes/colors';

interface ICustomFileInputProps {
	label: string;
	labelColor: string;
	name: string;
	className?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
	value?: File | null;
	accept?: string;
	description?: React.ReactNode;
	isRequired?: boolean;
	isDisabled?: boolean;
	radius?: 'full' | 'lg' | 'md' | 'sm' | 'none';
	size?: 'lg' | 'md' | 'sm' | 'xl';
	errorMessage?: string;
	isInvalid?: boolean;
}

const CustomFileInput = (props: ICustomFileInputProps) => {
	const {
		label,
		labelColor = colors.secondary,
		name,
		className,
		onChange,
		onBlur,
		value,
		accept,
		description,
		isRequired = false,
		isDisabled = false,
		radius = 'md',
		size = 'md',
		errorMessage,
		isInvalid
	} = props;

	return (
		<div className={cn('flex flex-col', className)}>
			{label && (
				<label
					className={cn('block text-left mb-1', {
						'text-xs': size === 'sm',
						'text-sm': size === 'md',
						'text-md': size === 'lg',
						'text-lg': size === 'xl'
					})}
					style={{ color: isInvalid ? '#891a1c' : labelColor }}
				>
					{label} {isRequired && <span className="text-warning">*</span>}
				</label>
			)}

			<div
				className={cn(
					'relative flex items-center justify-center border border-gray-300 rounded-lg shadow-sm bg-gray-100 cursor-pointer transition hover:bg-gray-200',
					{
						'opacity-50 cursor-not-allowed': isDisabled,
						'rounded-full': radius === 'full',
						'rounded-lg': radius === 'lg',
						'rounded-md': radius === 'md',
						'rounded-sm': radius === 'sm',
						'rounded-none': radius === 'none'
					},
					{
						'h-8 text-xs': size === 'sm',
						'h-10 text-sm': size === 'md',
						'h-12 text-md': size === 'lg',
						'h-14 text-lg': size === 'xl'
					}
				)}
			>
				<input
					type="file"
					id={name}
					accept={accept}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
					required={isRequired}
					disabled={isDisabled}
					className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
				/>

				<div className="flex items-center justify-center gap-2">
					<FileSelectIcon />
					<span className="text-gray-500 line-clamp-1">{value ? value.name : 'Click to upload'}</span>
				</div>
			</div>

			{description && <p className="text-xs text-gray-400">{description}</p>}
			{isInvalid && <p className="text-xs text-red">{errorMessage}</p>}
		</div>
	);
};

export default CustomFileInput;
