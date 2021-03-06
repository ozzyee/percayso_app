import Head from "next/head";
import { getNews } from "../functions/getNews";
import { NewsScreen } from "../layouts/news-screen";
import { TData } from "../types/api-data.definition";

// get the data from the server side props and pass it into the page
const Tech = ({ data }: { data: TData }) => {
	console.log(data);

	return (
		<div>
			{/* this is the header for the page */}
			<Head>
				<title>Tech</title>
				<meta name="tech" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NewsScreen data={data} title={"Tech News"} />
		</div>
	);
};

export async function getServerSideProps() {
	// we call are getNews function here as we wont to get the data before the page load
	const data = await getNews("tech");
	// pass the data to the page
	return { props: { data } };
}

export default Tech;
