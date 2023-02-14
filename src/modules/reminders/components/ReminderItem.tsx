const ReminderItem = (props) => {
	return (
		<div>
			<p>Label: {props.label}</p>
			<p>Time: {props.time}</p>
		</div>
	);
};

export default ReminderItem;
