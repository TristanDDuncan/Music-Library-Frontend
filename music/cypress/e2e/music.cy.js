describe('music frontend spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  
    // cy.get("[data-test='title']").type("crazy")

    // cy.get("[data-test='artist']").type("lil uzi vert	")

    // cy.get("[data-test='album']").type("EA")

    // cy.get("[data-test='genre']").type("Rap")

    // cy.get("[data-test='release date']").type("2012-12-22")

    // cy.get("[data-testid='submit btn']").click()


    cy.wait(2000)


    cy.get("[data-testid='search']").type("lil uzi vert")  
    cy.contains("lil uzi vert")
  }) 
})