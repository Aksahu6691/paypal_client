import { cn } from '@nextui-org/react';

interface ICustomSvgIconProps {
	Icon: React.ReactNode;
	className?: string;
}
const CustomSvgIcon = (props: ICustomSvgIconProps) => {
	return (
		<div
			className={cn(
				`${props.className} flex items-center justify-center text-center w-10 h-10 bg-white rounded-full ease-in-out hover:scale-105 cursor-pointer`
			)}
		>
			<div className={'text-pink-purple'}>{props.Icon}</div>
		</div>
	);
};

export default CustomSvgIcon;
