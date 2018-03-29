describe("music@", () => {
    it ("Loads", () => {
        cy.visit("http://music-at.surge.sh")
    })
    it ("Logs In", () => {
        cy.visit("http://music-at.surge.sh/?access_token=BQDmF7VJfg02qowgStIlCElp35vIFr9AceMtV1tQw8FzAtu_4-OOp-qPWmjmRvWg9odayE2hM88f7b3N37G627rGuR52t3_Y5x_tLajvRPcbl0I331Qg65bFzMJd4GkyxSbFvLllrwQLCr85akYaykEHg6ZxEVNEILcZ-EaSwVnbzrvPQjHGQa7gnw")
    })
    it ("Has followed artists", () => {
        cy.get(".artist-body > div").should("have.length.gt", 0)

    })
    it ("loads a song", () => {
        cy.get(".artist-body > div > .profile > #artist-image-container > #artist-image").eq(3).click()
        cy.get(".SpotifyPlayer")
        .should("have.attr", "src")
    })
    it ("loads tour", () => {
        cy.get(".artist-body > div > .profile > #artist-image-container > #artist-image").eq(2).trigger("mouseover")
        cy.get(".tour-icon-show").click()
        cy.get("#tour > #name > p")
        .should("be.visible")
    })
    it ("performs a search", () => {
        cy.get(".c014").click()
        cy.get("#search-icon").click()
        cy.get("#search-input").type("Bob Marley")
        cy.get("#search-form").submit()
        cy.get(".artist-body > div").should("have.length.gt", 0)
    })
    it ("returns to user's followed artists", () => {
        cy.get("#user-header").click()
        cy.get(".artist-body > div").should("have.length.gt", 0)
    })
    it ("logs out", () => {
        cy.get("#profile-icon").click()
        cy.location().should((loc) => {
            expect(loc.host).to.eq("music-at.surge.sh")
        })
    })

})

