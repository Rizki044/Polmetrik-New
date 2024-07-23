describe("Pantauan Tokoh", () => {
    beforeEach(() => {
        cy.login()
    });

it.only ("Open Widget Pantauan Tokoh", () => {
    cy.get('body');

    //Filter Tanggal
    cy.get('[href="/monitoring"] > .MuiList-root > .MuiButtonBase-root').click();
    cy.get('.MuiButtonBase-root > .MuiBox-root').click()
    cy.wait(1000)
    cy.get('.rdrDayToday > .rdrDayNumber > span').click()
    cy.get('.MuiPaper-root > :nth-child(2) > .MuiButtonBase-root').click();
    
    //Percakapan Media Sosial
    cy.get(':nth-child(1) > a > .MuiPaper-root > .MuiCardContent-root > .MuiBox-root > .css-1nn5yaj').click()
    cy.wait(5000);

    //Jangkauan Pemberitaan
    cy.get('[href="/monitoring"] > .MuiList-root > .MuiButtonBase-root').click();
    cy.get(':nth-child(2) > a > .MuiPaper-root > .MuiCardContent-root > .MuiBox-root > .css-1nn5yaj').click()
    cy.wait(5000);

    //Mention
    cy.get('[href="/monitoring"] > .MuiList-root > .MuiButtonBase-root').click();
    cy.get(':nth-child(3) > a > .MuiPaper-root > .MuiCardContent-root > .MuiBox-root > .css-1nn5yaj').click()
    cy.wait(5000);

    //Total Percakapan Semua Media 
    cy.get('[href="/monitoring"] > .MuiList-root > .MuiButtonBase-root').click();
    cy.get('.MuiCardHeader-action > .MuiButton-outlined').click()
    cy.get('.css-ega8m4 > canvas');



    })

});