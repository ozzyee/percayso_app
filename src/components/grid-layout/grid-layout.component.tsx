/* eslint-disable @next/next/no-img-element */
import { TData } from "../../types/api-data.definition";
import { GridItem } from "../grid-item/grid-item.component";
import styles from "./grid-layout.module.css";

// we have made a component for the grid layout because we can have specific styles for it and it also break down the code is more readable
// we are passing the data into are component and giving it a type we made earlier
export const GridLayout = ({ data }: TGridLayout) => {
	return (
		<>
			<div className={styles.gridLayoutContainer} data-cy="grid-layout">
				{/* as we only wont 5 items we have an array method to specify the index starting from and ending */}
				{data?.articles?.slice(0, 5).map(({ image, title, url }, key) => {
					console.log("image", image);

					return (
						<GridItem
							key={key}
							// as we have made named are styes very Simla to one another we have use bracket notation and the current index for are class name
							className={styles[`gridContainer${key + 1}`]}
							title={title}
							image={image}
							link={url}
						/>
					);
				})}
			</div>
		</>
	);
};

export type TGridLayout = { data: TData };
