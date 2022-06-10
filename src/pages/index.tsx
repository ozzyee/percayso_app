import type { NextPage } from "next";
import Head from "next/head";
import { GridLayout } from "../components/grid-layout/grid-layout.component";
import { Nav } from "../components/nav/nav.component";
import { NewsCardLayout } from "../components/news-cards-layout/news-cards-layout.coponent";
import { getNews } from "../functions/getNews";
import styles from "../styles/Home.module.css";
import { TData } from "../types/api-data.definition";

// get the data from the server side props and pass it into the page
const Home = ({ data }: { data: TData }) => {
	return (
		<div>
			{/* this is the header for the page */}
			<Head>
				<title>Home</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* pass in teh component */}
			<main>
				<GridLayout data={data} />
				<NewsCardLayout data={data} startIndex={6} />
			</main>
		</div>
	);
};

export async function getServerSideProps() {
	// we call are getNews function here as we wont to get the data before the page load
	const data = await getNews("top");
	// pass the data to the page
	return { props: { data } };
}

export default Home;