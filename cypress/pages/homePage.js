class homePage{
    elements ={
        homeBtn : () => cy.get(".navbar-brand"),
        commandsDropDown : () => cy.get(".dropdown-toggle"),
        utilitiesBtn : () => cy.get('a:contains("Utilities")'),
        apiBtn: () => cy.get('a:contains("Cypress API")'),
        commandsQuerying: () => cy.get('a[href="/commands/querying"]')
    }

    clickOnCommands(){
        this.elements.commandsDropDown().click();
    }
}
    
export default new homePage();
