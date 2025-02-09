import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomDot from './CustomDot';
import { ResponsiveConfig } from '@/types/common.type';
import { cn } from '@nextui-org/react';
import { Responsive } from '@/utils/constants';

interface ICustomCarouselProp {
	children: React.ReactNode;
	swipeable?: boolean;
	draggable?: boolean;
	showDots?: boolean;
	responsive?: ResponsiveConfig;
	infinite?: boolean;
	autoPlay?: boolean;
	autoPlaySpeed?: number;
	transitionDuration?: number;
	keyBoardControl?: boolean;
	containerClass?: string;
	dotListClass?: string;
	className?: string;
	arrows?: boolean;
	pauseOnHover?: boolean;
}

const CustomCarousel = (props: ICustomCarouselProp) => {
	const {
		children,
		swipeable = true,
		draggable = true,
		showDots = true,
		responsive = Responsive,
		infinite = true,
		autoPlay = true,
		autoPlaySpeed = 3000,
		transitionDuration = 500,
		keyBoardControl = true,
		containerClass,
		dotListClass,
		className = 'h-full py-20',
		arrows = false,
		pauseOnHover = true
	} = props;

	return (
		<Carousel
			swipeable={swipeable}
			draggable={draggable}
			showDots={showDots}
			responsive={responsive}
			infinite={infinite}
			autoPlay={autoPlay}
			autoPlaySpeed={autoPlaySpeed}
			transitionDuration={transitionDuration}
			keyBoardControl={keyBoardControl}
			containerClass={cn(containerClass)}
			dotListClass={cn(dotListClass)}
			className={cn(className)}
			arrows={arrows}
			pauseOnHover={pauseOnHover}
			customDot={<CustomDot active={true} />}
		>
			{children}
		</Carousel>
	);
};

export default CustomCarousel;
