describe("Life Page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/life");
	});

	it("successfully loads", () => {
		cy.visit("http://localhost:3000/life");
	});

	it("should render the card layout", () => {
		cy.get("[data-cy=card-layout]").then(($grid) => {
			$grid.is(":visible");
		});
	});

	it("shoukld render the card layout item", () => {
		cy.get("[data-cy= card-item]").then(($grid) => {
			$grid.is(":visible");
		});
	});

	it("shoul render a sherch input", () => {
		cy.get("[data-cy=search-bar]").then(($input) => {
			$input.is(":visible");
		});
	});

	it("shoul render a search button", () => {
		cy.get("[data-cy=search-button]").then(($button) => {
			$button.is(":button");
		});
	});

	it("shoul render a navigation bar and links", () => {
		cy.get("nav");
		cy.get("[data-cy=link]");
	});

	it("shoul render a title", () => {
		cy.get("h1").contains("Life News");
	});
});
