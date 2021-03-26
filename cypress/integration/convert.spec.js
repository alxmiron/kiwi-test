context("Aliasing", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	const getKeyButton = (number) => {
		return cy.get("[data-test='keypad']").get("button").contains(number);
	};

	const enterKeys = (numbers) => {
		numbers.split("").forEach((number) => {
			getKeyButton(number).click();
		});
	};

	it("should enter numbers to the input field", () => {
		enterKeys("23");
		cy.get("input[data-test='numericInput']").should("have.value", "23");
	});

	it("should clear input", () => {
		enterKeys("23");
		cy.get("button[data-test='clearInputButton']").click();
		cy.get("input[data-test='numericInput']").should("have.value.value", 2);
		cy.get("button[data-test='clearInputButton']").click();
		cy.get("input[data-test='numericInput']").should("not.have.value");
	});

	it("should show words in list", () => {
		const expectedWords = ["apple"];
		enterKeys("27753");
		cy.get("[data-test='wordTag']")
			.should("have.length", expectedWords.length)
			.each(($word) => {
				const word = $word.text();
				expect(word).to.be.oneOf(expectedWords);
			});
	});
});
