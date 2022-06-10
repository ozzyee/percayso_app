import Head from "next/head";
import { Context } from "node:vm";
import { getNews } from "../functions/getNews";
import { NewsScreen } from "../layouts/news-screen";
import { TData } from "../types/api-data.definition";

// get the data from the server side props and pass it into the page
const Search = ({
	data,
	searchValue,
}: {
	data: TData;
	searchValue: string;
}) => {
	console.log(data);

	return (
		<div>
			{/* this is the header for the page */}
			<Head>
				<title>Money</title>
				<meta name="tech" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NewsScreen data={data} title={`you searched for ${searchValue}`} />
		</div>
	);
};

export async function getServerSideProps(ctx: Context) {
	const searchValue = ctx.params.id;
	// we call are getNews function here as we wont to get the data befor the page load
	const data = await getNews(searchValue);
	// pass the data to the page
	return { props: { data, searchValue: searchValue } };
}

export default Search;
