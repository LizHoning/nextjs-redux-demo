import style from "./Navigation.module.css";
import Link from "next/link";

const PageWrapper = (): JSX.Element => {
	return (
		<nav className={style.navigation}>
			<ul>
				<li>
					<Link href="/">Main</Link>
				</li>
				<li>
					<Link href="/hangman">Hangman</Link>
				</li>
				<li>
					<Link href="/tictactoe">Tic Tac Toe</Link>
				</li>
				<li>
					<Link href="/cards">Cards</Link>
				</li>
			</ul>
		</nav>
	);
};

export default PageWrapper;
