import type { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
	return <div>{children}</div>;
};

const LabeledBox = ({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) => {
	return (
		<div>
			<h2>{title}</h2>
			{children}
		</div>
	);
};
