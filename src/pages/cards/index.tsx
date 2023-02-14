import type { NextPage } from "next";
import PageWrapper from "../../common/components/PageWrapper";
import Layout from "../../modules/cards/components/Layout";

interface CardItem {
	id: number;
	title: string;
	sequence: number;
}

interface SectionItem {
	id: number;
	title: string;
	sequence: number;
	cards: CardItem[];
}

const allCards: SectionItem[] = [
	{
		id: 1,
		title: "Section 1",
		sequence: 0,
		cards: [],
	},
];

const Home: NextPage = () => {
	return (
		<PageWrapper>
			<Layout />
		</PageWrapper>
	);
};

export default Home;
