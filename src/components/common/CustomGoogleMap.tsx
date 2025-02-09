interface ICustomGoogleMapProps {
	src: string;
	width?: string;
	height?: string;
	borderRadius?: string;
}

const CustomGoogleMap = (props: ICustomGoogleMapProps) => {
	const { src, width = '100%', height = '350px', borderRadius = '5px' } = props;
	return (
		<iframe
			width={width}
			height={height}
			style={{ borderRadius }}
			src={src}
			allowFullScreen
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
		></iframe>
	);
};

export default CustomGoogleMap;
