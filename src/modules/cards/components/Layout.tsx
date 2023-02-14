import Card from "./Card";
import style from "./Layout.module.css";

const Layout = () => {
	const cards = [];

	for (let i = 1; i <= 20; i++) {
		cards.push(i);
	}
	return (
		<div className={style.cardsLayout}>
			{cards.map((card) => {
				return <Card key={card} id={card} />;
			})}
		</div>
	);
};

export default Layout;
