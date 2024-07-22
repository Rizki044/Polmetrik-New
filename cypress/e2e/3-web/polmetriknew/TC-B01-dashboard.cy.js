describe("Dashboard", () => {
    beforeEach(() => {
        cy.login()
    });

it("View Dashboard", () => {
    cy.get('body');

    //Pantauan Persepsi Publik dari Menu Bawah
    cy.get('[href="/"] > .MuiList-root > .MuiButtonBase-root').click()
    cy.get('#monitoring > a > .MuiButtonBase-root > .MuiPaper-root > img').click()
    cy.wait(5000);
    });
});
