import ReminderItem from "./ReminderItem";

const bleh = [
	{ id: 1, label: "timer 1", time: "34:00" },
	{ id: 2, label: "timer 2", time: "5:00" },
];
// have to order them from soonest to latest
// have an "expires" time/date and a "length" time
const List = () => {
	return (
		<div>
			{bleh.map((item) => {
				return <ReminderItem key={item.id} {...item} />;
			})}
		</div>
	);
};

export default List;
