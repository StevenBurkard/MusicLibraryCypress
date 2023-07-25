describe('Music Library app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    });
    
    it('Adds a new song', () => {
      cy.get('[data-cy=song-title]').type('Sabotage');
      cy.get('[data-cy=song-artist]').type('Beastie Boys');
      cy.get('[data-cy=song-album]').type('III Communication');
      cy.get('[data-cy=song-genre]').type('Punk Rock');
      cy.get('[data-cy=song-release-date]').type('1994-01-28');
      cy.get('[data-cy=song-running-time]').type('343');
      cy.get('[data-cy=add-song-button]').click();
    });

    it('Filters song based on search term', () => {
      const searchTerm = 'Sabotage';

      cy.get('[data-cy=search-bar]').type(searchTerm).wait(1000);
      cy.get('table').contains('td', searchTerm).should('be.visible');
    });

    it('Deletes the new song', () => {
      const songTitle = 'Sabotage';

      cy.contains('td', songTitle)
        .parent('[data-cy^=song-row-]')
        .invoke('attr', 'data-cy')
        .then(songRowAttr => {
          const songId = songRowAttr.split('-')[2];

          cy.get(`[data-cy=delete-song-${songId}]`).click();
          cy.get(`[data-cy=song-row-${songId}]`).should('not.exist');
        });
    });
  
});