import React from 'react';
import { Tooltip } from '@nextui-org/react';

interface ICustomToolTipProps {
	content: string;
	children: React.ReactNode;
	showArrow?: boolean;
	isDisabled?: boolean;
}

const CustomToolTip = (props: ICustomToolTipProps) => {
	const { content, children, showArrow = true, isDisabled = false } = props;

	return (
		<Tooltip content={content} showArrow={showArrow} isDisabled={isDisabled}>
			{children}
		</Tooltip>
	);
};

export default CustomToolTip;
