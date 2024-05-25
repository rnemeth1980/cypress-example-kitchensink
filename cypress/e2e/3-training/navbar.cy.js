import homePage from "../../pages/homePage"

describe('home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080")
  })
  
  context("navbar", () => {
    it('navbar elements are present', () => {
      homePage.elements.homeBtn().should('exist')
      homePage.elements.commandsDropDown().should('exist')
      homePage.elements.utilitiesBtn().should('exist')
      homePage.elements.apiBtn().should('exist')
    })

    it('command dropdown element is present', () => {
      homePage.clickOnCommands();
      homePage.elements.commandsQuerying().should('exist')
    })
       
  })
})