import CustomToolTip from './CustomToolTip';

interface ICustomEllipsis {
	text?: string | null;
}

const CustomEllipsisContainer = (props: ICustomEllipsis) => {
	const { text } = props;

	return (
		<CustomToolTip content={text || ''} showArrow isDisabled={!text}>
			<div className="text-ellipsis w-20 overflow-hidden text-nowrap">{text || '-'}</div>
		</CustomToolTip>
	);
};

export default CustomEllipsisContainer;
