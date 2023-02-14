import type { NextPage } from "next";
import PageWrapper from "../common/components/PageWrapper";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<PageWrapper>
			<div className={styles.container}>
				<h1 className="title">Bloop bloop</h1>
				<p className={styles.description}>Welcome to my site</p>
			</div>
		</PageWrapper>
	);
};

export default Home;
