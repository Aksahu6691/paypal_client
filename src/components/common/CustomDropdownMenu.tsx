import { ICustomDropdownMenuItem } from '@/types/common.type';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, cn, SlotsToClasses } from '@nextui-org/react';
import { Key, ReactNode } from 'react';

interface ICustomDropdownMenuProps {
	items: ICustomDropdownMenuItem[];
	children: ReactNode;
	onAction: (key: Key) => void;
	className?: string;
	menuClassName?: string;
	itemClasses?: SlotsToClasses<'base' | 'title' | 'description' | 'shortcut' | 'selectedIcon' | 'wrapper'>;
	disabledKeys?: string[];
	isDisabled?: boolean;
	variant?: 'shadow' | 'solid' | 'bordered' | 'light' | 'faded' | 'flat';
	radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
	showArrow?: boolean;
}

const CustomDropdownMenu = (props: Readonly<ICustomDropdownMenuProps>) => {
	const {
		items,
		onAction,
		children,
		className,
		menuClassName,
		disabledKeys,
		isDisabled,
		variant,
		itemClasses,
		radius,
		showArrow = true
	} = props;

	return (
		<Dropdown showArrow={showArrow} radius={radius} className={cn(className)} isDisabled={isDisabled}>
			<DropdownTrigger>{children}</DropdownTrigger>

			<DropdownMenu
				aria-label="Custom Dropdown List"
				items={items.filter(item => !item.isHidden)}
				onAction={onAction}
				className={cn(menuClassName)}
				disabledKeys={disabledKeys}
				variant={variant}
				itemClasses={itemClasses}
			>
				{item => {
					return (
						<DropdownItem
							key={item.key}
							color={item.color}
							startContent={item.StartContent}
							description={item.description}
							href={item.href}
							isReadOnly={item.isReadOnly}
						>
							{item.title}
						</DropdownItem>
					);
				}}
			</DropdownMenu>
		</Dropdown>
	);
};

export default CustomDropdownMenu;
