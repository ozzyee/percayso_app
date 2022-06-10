import { mount } from "cypress/react";
import { NewsCard } from "../../src/components/news-card/news-card.component";

describe("<NewsCard>", () => {
	beforeEach(() => {
		mount(
			<NewsCard
				image={fakeData.image}
				title={fakeData.title}
				source={fakeData.source.name}
				publishedAt={fakeData.publishedAt}
				link={fakeData.url}
			/>
		);
	});

	it("mounts", () => {
		mount(
			<NewsCard
				image={fakeData.image}
				title={fakeData.title}
				source={fakeData.source.name}
				publishedAt={fakeData.publishedAt}
				link={fakeData.url}
			/>
		);
	});

	it("must have a heading with the content 'google phone'", () => {
		cy.get("[data-cy=card-layout-item-headding]").contains("google phone");
	});

	it("must have a source name 'Android Headlines", () => {
		cy.get("[data-cy=card-layout-item-src-name]").contains("Android Headlines");
	});

	it("must have a date published withe value '09/06/2022'", () => {
		cy.get("[data-cy=card-layout-item-publishTime]").contains("09/06/2022");
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
