/* eslint-disable @next/next/no-img-element */
import style from "./news-card.module.css";
import dayjs from "dayjs";

//  we pass in the props fort the card and give it are type definition
export const NewsCard = ({
	image,
	title,
	source,
	publishedAt,
	link,
}: TNewsCard) => {
	// as the date isn't in the format we wont we have used a lightweight package to help with this
	const formateDate = dayjs(publishedAt).format("DD/MM/YYYY");

	return (
		<div
			data-cy="card-item"
			className={style.cardWrapper}
			onClick={() => {
				window.open(link);
			}}
		>
			<div className={style.card}>
				<img src={image} alt="" />
				<h4 data-cy="card-layout-item-headding">{title}</h4>
				<div className={style.newsPublishInfo}>
					<p className={style.sourceName} data-cy="card-layout-item-src-name">
						{source}
					</p>
					<p
						className={style.publishTime}
						data-cy="card-layout-item-publishTime"
					>
						{formateDate}
					</p>
				</div>
			</div>
		</div>
	);
};

// we have built are type definition for are card and passing it to the component
type TNewsCard = {
	image: string;
	title: string;
	source: string;
	publishedAt: string;
	link: string;
};
