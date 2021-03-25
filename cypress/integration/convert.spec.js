context("Aliasing", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	const getKeyButton = (number) => {
		return cy.get("[data-test='keypad']").get("button").contains(number);
	};

	it("should enter numbers to the input field", () => {
		getKeyButton("2").click();
		getKeyButton("3").click();
		cy.get("input[data-test='numericInput']").should("have.value", "23");
	});

	it("should clear input", () => {
		getKeyButton("2").click();
		getKeyButton("3").click();
		cy.get("button[data-test='clearInputButton']").click();
		cy.get("input[data-test='numericInput']").should("not.have.value");
	});

	it("should show words in list", () => {
		const expectedWords = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
		getKeyButton("2").click();
		getKeyButton("3").click();
		cy.get("[data-test='wordTag']")
			.should("have.length", 9)
			.each(($word) => {
				const word = $word.text();
				expect(word).to.be.oneOf(expectedWords);
			});
	});
});
