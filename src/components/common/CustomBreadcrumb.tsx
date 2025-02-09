interface ICustomBreadcrumbProps {
	title: string;
	description: string;
}
const CustomBreadcrumb = (props: ICustomBreadcrumbProps) => {
	return (
		<div className="min-h-72 px-16 flex flex-col items-center justify-evenly text-center">
			<div>
				<h3 className="text-slate-gray">{props.description}</h3>
				<h1 className="text-[62px] font-[900] text-night-black">{props.title}</h1>
			</div>
			<hr className="my-4 w-full border-1 border-light-gray" />
		</div>
	);
};

export default CustomBreadcrumb;
