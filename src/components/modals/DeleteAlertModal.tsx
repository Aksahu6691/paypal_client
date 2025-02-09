import { ModalBody, ModalFooter } from '@nextui-org/react';
import CustomModalWrapper from '../common/CustomModalWrapper';
import { DeleteIcon } from '@/assets/icons';
import CustomButton from '../common/CustomButton';

interface IDeleteAlertModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	message: string;
	subMessage?: string;
}

const DeleteAlertModal = (props: IDeleteAlertModalProps) => {
	const {
		isOpen,
		onClose,
		onConfirm,
		message,
		subMessage = 'This action will delete the account, but their details will remain viewable.'
	} = props;
	return (
		<CustomModalWrapper onClose={onClose} isOpen={isOpen}>
			<ModalBody className="flex flex-col justify-between items-center p-8 gap-3 h-full">
				<DeleteIcon />

				<h1 className="text-center font-bold text-xl text-black mt-3">{message}</h1>
				<p className="text-center text-black">{subMessage}</p>
				<ModalFooter>
					<CustomButton buttonRadius="full" onPress={onConfirm}>
						Yes, delete
					</CustomButton>
					<CustomButton buttonRadius="full" variant="bordered" onPress={onClose}>
						Cancel
					</CustomButton>
				</ModalFooter>
			</ModalBody>
		</CustomModalWrapper>
	);
};

export default DeleteAlertModal;
