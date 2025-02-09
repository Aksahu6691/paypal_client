import React from 'react';
import { User } from '@nextui-org/react';

interface ICustomAvatar {
	src: string;
	description?: string;
	name?: string;
	showFallback?: boolean;
	CustomFallback?: React.ReactNode;
	className?: Partial<Record<'base' | 'wrapper' | 'name' | 'description', string>>;
	avatarClassName?: string;
}

const CustomAvatar = (props: ICustomAvatar) => {
	const { src, description, name, showFallback = true, CustomFallback, className, avatarClassName } = props;
	return (
		<User
			avatarProps={{
				src,
				showFallback,
				fallback: CustomFallback,
				className: avatarClassName
			}}
			description={description}
			name={name}
			classNames={className}
		/>
	);
};

export default CustomAvatar;
