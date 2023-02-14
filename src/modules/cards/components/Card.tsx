import style from "./Card.module.css";

interface CardProps {
	id: number;
}

const Card = (props: CardProps) => {
	return <div className={style.card}>I am card {props.id}</div>;
};

export default Card;
