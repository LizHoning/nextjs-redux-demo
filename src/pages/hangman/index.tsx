import type { NextPage } from "next";
import PageWrapper from "../../common/components/PageWrapper";
import Layout from "../../modules/hangman/components/Layout";

const Home: NextPage = () => {
	return (
		<PageWrapper>
			<Layout />
		</PageWrapper>
	);
};

export default Home;
