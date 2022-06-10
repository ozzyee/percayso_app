import { Nav } from "../components/nav/nav.component";
import { NewsCardLayout } from "../components/news-cards-layout/news-cards-layout.coponent";
import { TData } from "../types/api-data.definition";

export const NewsScreen = ({ data, title }: { data: TData; title: string }) => {
	return (
		<>
			<main>
				<NewsCardLayout data={data} heading={title} />
			</main>
		</>
	);
};
