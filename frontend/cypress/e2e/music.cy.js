describe('Music Library app', () => {
  it('Adds a new song', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-cy=song-title]').type('Sabotage');
    cy.get('[data-cy=song-artist]').type('Beastie Boys');
    cy.get('[data-cy=song-album]').type('III Communication');
    cy.get('[data-cy=song-genre]').type('Punk Rock');
    cy.get('[data-cy=song-release-date]').type('1994-01-28');
    cy.get('[data-cy=song-running-time]').type('343');
    cy.get('[data-cy=add-song-button]').click();
  })
})