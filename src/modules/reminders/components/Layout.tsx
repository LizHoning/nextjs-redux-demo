import List from "./List";
import AddButton from "./AddButton";
import AddReminderModal from "./AddReminderModal";

const Layout = () => {
	return (
		<div>
			<h2>Reminders</h2>
			<AddButton />
			<List />
			<AddReminderModal />
		</div>
	);
};

export default Layout;
