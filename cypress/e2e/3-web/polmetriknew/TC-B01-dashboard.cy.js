describe("Dashboard", () => {
    beforeEach(() => {
        cy.login()
    });

it("View Dashboard", () => {
    cy.get('body');

    //Pantauan Persepsi Publik dari Menu Bawah
    cy.get('[href="/"] > .MuiList-root > .MuiButtonBase-root').click()
    cy.wait(5000)
    cy.get('#monitoring > a > .MuiButtonBase-root > .MuiPaper-root > img').click()
    cy.wait(5000)
    cy.screenshot();

    //Kandidat Kompetitor dari Menu Bawah
    cy.get('[href="/"] > .MuiList-root > .MuiButtonBase-root').click()
    cy.wait(5000)
    cy.get('#competitor > a > .MuiButtonBase-root > .MuiPaper-root > img').click()
    cy.wait(5000)
    cy.screenshot();

    //Pantauan Persepsi Publik dari Menu Atas
    cy.get('[href="/monitoring"] > .MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.wait(5000)
    cy.screenshot();

    //Kandidat Kompetitor dari Menu Atas
    cy.get('[href="/competitor"] > .MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.wait(5000)
    
    //Influencer Menu Atas
    cy.get('[href="/influencer"] > .MuiList-root > .MuiButtonBase-root').click()
    cy.wait(3000)
    cy.screenshot();

    //Download&Konsultan Menu Atas
    cy.get('[href="/download-contact"] > .MuiList-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
    cy.wait(3000)
      });
});
