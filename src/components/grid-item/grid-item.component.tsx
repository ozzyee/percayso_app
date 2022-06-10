/* eslint-disable @next/next/no-img-element */
import styles from "./grid-item.module.css";

// we are passing in some vales for this component and giving it a type definition
export const GridItem = ({ className, image, title, link }: TGridItem) => {
	{
		/* we are not using next image as all images come from multiple sources
		   and we don't know all of them to put into are next configuration */
	}
	return (
		<div
			data-cy="grid-layout-item"
			className={className}
			onClick={() => {
				// on click of the card we open a new tab with the selected content
				window.open(link);
			}}
		>
			<div className={styles.overlay} data-cy="grid-layout-item-overlay" />
			<img
				src={image}
				className={styles.image}
				alt="image"
				data-cy="grid-layout-item-image"
			/>

			<div className={styles.textHolder}>
				<h3 data-cy="grid-layout-item-heading">{title}</h3>
			</div>
		</div>
	);
};

// as we are passing in props we have typed them here
// and use it at the top of are function
type TGridItem = {
	className: string;
	image: string;
	title: string;
	link: string;
};
