import { cn } from '@nextui-org/react';

interface ICustomCardProp {
	active: boolean;
	onClick?: () => void;
}

const CustomDot = (props: ICustomCardProp) => {
	const { active, onClick } = props;
	return (
		<button
			className={cn('w-3 h-3 rounded-full mx-1 transition-colors', active ? 'bg-pink-purple' : 'bg-[#ccc]')}
			onClick={onClick}
		/>
	);
};

export default CustomDot;
