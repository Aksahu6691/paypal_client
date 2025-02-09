import { Modal, ModalContent, ModalHeader } from '@nextui-org/react';
import { MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ICustomModalWrapperProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	headerTitle?: string;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full';
	scrollBehavior?: 'inside' | 'outside';
	placement?: 'top' | 'bottom' | 'center' | 'top-center' | 'bottom-center';
	backdrop?: 'opaque' | 'blur' | 'transparent';
	motionProps?: MotionProps;
	radius?: 'none' | 'sm' | 'md' | 'lg';
	shadow?: 'sm' | 'md' | 'lg';
	className?: string;
	hideCloseIcon?: boolean;
}

const CustomModalWrapper: React.FC<ICustomModalWrapperProps> = (props: ICustomModalWrapperProps) => {
	const {
		isOpen,
		onClose,
		children,
		headerTitle,
		size,
		scrollBehavior,
		placement,
		backdrop,
		motionProps,
		radius,
		shadow,
		className,
		hideCloseIcon = false
	} = props;

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size={size}
			scrollBehavior={scrollBehavior}
			placement={placement}
			backdrop={backdrop}
			motionProps={motionProps}
			radius={radius}
			shadow={shadow}
			className={className}
			hideCloseButton={hideCloseIcon}
			classNames={{
				closeButton: 'border-2 border-gray-200 mt-2 mr-4'
			}}
		>
			<ModalContent className="min-w-64 min-h-64">
				{headerTitle && <ModalHeader>{headerTitle}</ModalHeader>}
				{children}
			</ModalContent>
		</Modal>
	);
};

export default CustomModalWrapper;
