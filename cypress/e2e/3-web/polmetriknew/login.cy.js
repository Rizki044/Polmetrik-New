describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('https://app.polmetrik.id/')
  })
  const username='.css-1wpyscx'
  const password='.css-7lq7et'
  const button='.css-1ce0nau'
  const message='.css-1u4yi1p'

  it('Verify Failed Login invalid email address', () => {
    cy.get(username).type('wakidah@')
    cy.wait(1000)
    cy.get(password).type('Tina2024')
    cy.wait(1000)
    cy.get(button).click()
    cy.get(message).should('be.visible')
    cy.wait(1000)
})

it('Verify Failed Login Without email address', () => {
  cy.get('.css-7lq7et').type('Tina2024')
  cy.wait(1000)
  cy.get(button).click()
  cy.get('.css-1u4yi1p').should('be.visible')
  cy.wait(1000)
})

it('Verify Failed Login Without password', () => {
  cy.get(username).type('wakidah@binokular.net')
  cy.wait(1000)
  cy.get(button).click()
  cy.get('.css-1u4yi1p').should('be.visible')
  cy.wait(1000)
})

it('Verify Failed Login Wrong Password', () => {
  cy.get(username).type('wakidah@binokular.net')
  cy.wait(1000)
  cy.get(password).type('tina2024')
  cy.wait(1000)
  cy.get(button).click()
  cy.get('.css-1u4yi1p').should('be.visible')
  cy.wait(1000)
})

it('Verify Success Login', () => {
  cy.get(username).type('produkumum')
  cy.wait(1000)
  cy.get(password).type('polmetrik2024')
  cy.wait(1000)
  cy.get(button).click()
  cy.get('.css-6ct1tc > .MuiTypography-root', {timeout:30000}).contains('Dashboard');
  });
})
