import { mount } from "cypress/react";
import { GridItem } from "../../src/components/grid-item/grid-item.component";
import { GridLayout } from "../../src/components/grid-layout/grid-layout.component";
import { TData } from "../../src/types/api-data.definition";

describe("<GridItem>", () => {
	beforeEach(() => {
		cy.viewport(310, 200);
		mount(
			<GridItem
				className={""}
				image={fakeData.image}
				title={fakeData.title}
				link={fakeData.url}
			/>
		);
	});

	it("mounts", () => {
		mount(
			<GridItem
				className={""}
				image={fakeData.image}
				title={fakeData.title}
				link={fakeData.url}
			/>
		);
	});

	it("must have a heading with the content 'google phone'", () => {
		cy.get("[data-cy=grid-layout-item-heading]").contains("google phone");
	});

	it("must have an image", () => {
		cy.get("[data-cy=grid-layout-item-image]")
			.should("be.visible")
			// @ts-ignore
			.should(([img]) => {
				expect(img.naturalWidth).to.equal(1600);
			});
	});

	it("must have an overlay", () => {
		cy.get("[data-cy=grid-layout-item-overlay]");
	});
});

const fakeData = {
	title: "google phone",
	description:
		"Google released the third beta for Android 13 this week, and we're still finding some rather subtle changes with this new version of Android. Even as it",
	content:
		"Google released the third beta for Android 13 this week, and we’re still finding some rather subtle changes with this new version of Android. Even as it hits platform stability – with only one beta left. One of those subtle changes is the gesture nav... [1461 chars]",
	url: "https://www.androidheadlines.com/2022/06/the-gesture-navigation-bar-is-thicker-in-android-13-beta-3-copying-ios.html",
	image:
		"https://www.androidheadlines.com/wp-content/uploads/2022/06/Android-13-beta-3-gesture-navigation-AM-AH.jpg",
	publishedAt: "2022-06-09T14:09:31Z",
	source: {
		name: "Android Headlines",
		url: "https://www.androidheadlines.com",
	},
};
