import { TData } from "../../types/api-data.definition";
import { NewsCard } from "../news-card/news-card.component";
import style from "./news-cards-layout.module.css";

export const NewsCardLayout = ({
	data,
	startIndex,
	endIndex,
	heading,
}: {
	data: TData;
	startIndex?: number;
	endIndex?: number;
	heading?: string;
}) => {
	return (
		<>
			{heading && <h1 className={style.heaing}>{heading}</h1>}

			<div className={style.cardLayout} data-cy="card-layout">
				{data.articles
					?.slice(startIndex, endIndex)
					.map(({ image, title, source, publishedAt, url }, key) => {
						return (
							<NewsCard
								key={key}
								image={image}
								title={title}
								source={source.name}
								publishedAt={publishedAt}
								link={url}
							/>
						);
					})}
			</div>
		</>
	);
};
