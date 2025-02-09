import { Autocomplete, AutocompleteItem, cn, MenuTriggerAction, SlotsToClasses } from '@nextui-org/react';
import { Key } from 'react';

interface ISearchableItems {
	key: string | number;
	label: string;
}

interface ICustomSearchInputProps {
	isClearable?: boolean;
	items: ISearchableItems[];
	className?: string;
	label?: string;
	placeholder?: string;
	isDisabled?: boolean;
	isReadOnly?: boolean;
	size?: 'sm' | 'md' | 'lg';
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
	variant?: 'flat' | 'faded' | 'bordered' | 'underlined';
	labelPlacement?: 'outside' | 'outside-left' | 'inside';
	StartContent?: React.ReactNode;
	EndContent?: React.ReactNode;
	Description?: React.ReactNode;
	isInvalid?: boolean;
	onInputChange?: (value: string) => void;
	onSelectionChange?: (key: Key | null) => void;
	onClose?: () => void;
	isLoading?: boolean;
	onOpenChange?: (isOpen: boolean, menuTrigger?: MenuTriggerAction) => void;
	isVirtualized?: boolean;
	classNames?: SlotsToClasses<
		'base' | 'listbox' | 'listboxWrapper' | 'popoverContent' | 'endContentWrapper' | 'clearButton' | 'selectorButton'
	>;
	radius?: 'sm' | 'md' | 'lg' | 'none' | 'full';
}
const CustomSearchInput = (props: ICustomSearchInputProps) => {
	const {
		isClearable,
		items,
		className,
		label,
		placeholder = 'Search...',
		isDisabled,
		isReadOnly,
		size,
		color,
		variant,
		labelPlacement,
		StartContent,
		EndContent,
		Description,
		isInvalid,
		onInputChange,
		onSelectionChange,
		onClose,
		isLoading,
		onOpenChange,
		isVirtualized,
		classNames,
		radius
	} = props;
	return (
		<Autocomplete
			isClearable={isClearable}
			className={cn(`${className} max-w-xs`)}
			defaultItems={items}
			label={label}
			placeholder={placeholder}
			isDisabled={isDisabled}
			isReadOnly={isReadOnly}
			size={size}
			color={color}
			variant={variant}
			labelPlacement={labelPlacement}
			startContent={StartContent}
			endContent={EndContent}
			description={Description}
			isInvalid={isInvalid}
			onInputChange={onInputChange}
			onSelectionChange={onSelectionChange}
			onClose={onClose}
			isLoading={isLoading}
			onOpenChange={onOpenChange}
			isVirtualized={isVirtualized}
			classNames={classNames}
			radius={radius}
		>
			{item => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
		</Autocomplete>
	);
};

export default CustomSearchInput;
