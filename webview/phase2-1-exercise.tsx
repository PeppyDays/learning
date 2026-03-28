const Badge = ({ text }: { text: string }) => {
	return <span>{text}</span>;
};

const Profile = ({ name, role }: { name: string; role: string }) => {
	return (
		<div>
			<Badge text={role} />
			<span>
				{name} - {role}
			</span>
		</div>
	);
};
