import { ReactNode } from "react";
import style from "./PageWrapper.module.css";
import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageWrapperProps {
	children?: ReactNode;
}

const PageWrapper = (props: PageWrapperProps): JSX.Element => {
	return (
		<div className={style.pageWrapper}>
			<Head>
				<title>Bloop bloop</title>
				<meta name="description" content="Bloop moop!" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.5"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navigation />
			<main className={style.main}>{props.children}</main>
			<Footer />
		</div>
	);
};

export default PageWrapper;
