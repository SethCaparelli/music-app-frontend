describe("music@", () => {
    it ("Loads", () => {
        cy.visit("/")
    })
    it ("Logs In", () => {
        cy.get("#splash-body > button").click()
    })
})

