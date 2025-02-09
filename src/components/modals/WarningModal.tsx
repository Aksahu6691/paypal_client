import { ModalBody } from '@nextui-org/react';
import CustomModalWrapper from '../common/CustomModalWrapper';
import { WarningIcon } from '@/assets/icons';

interface IWarningModalProps {
	isOpen: boolean;
	onClose: () => void;
	message: string;
}

const WarningModal = (props: IWarningModalProps) => {
	const { isOpen, onClose, message } = props;

	return (
		<CustomModalWrapper onClose={onClose} isOpen={isOpen}>
			<ModalBody className="flex flex-col justify-evenly items-center p-10 gap-4 h-full">
				<WarningIcon />

				<h1 className="font-bold text-2xl text-black">Warning!</h1>

				<p className="text-justify text-black">{message}</p>
			</ModalBody>
		</CustomModalWrapper>
	);
};

export default WarningModal;
