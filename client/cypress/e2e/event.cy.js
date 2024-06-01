describe('Events Page', () => {
  beforeEach(() => {
    // Mock the backend API for listing events
    cy.intercept('GET', 'http://localhost:5000/listevents', {
      statusCode: 200,
      body: {
        success: true,
        eventList: [
          {
            RendezvenyId: 1,
            RendezvenyNeve: 'Event 1',
            RendezvenyIdőpontja: '2023-06-01',
            EloadoNeveTitulusa: 'John Doe, PhD',
            RendezvenyTemaja: 'Technology',
            RendezvenyTipusa: 'Conference',
            RendezvenyHelyszine: 'Budapest',
            SzabadHelyekSzama: 100
          }
        ]
      }
    }).as('getEvents');

    // Mock the backend API for getting event details
    cy.intercept('GET', 'http://localhost:5000/listevent/1', {
      statusCode: 200,
      body: {
        success: true,
        event: {
          RendezvenyId: 1,
          RendezvenyNeve: 'Event 1',
          RendezvenyIdőpontja: '2023-06-01',
          EloadoNeveTitulusa: 'John Doe, PhD',
          RendezvenyTemaja: 'Technology',
          RendezvenyTipusa: 'Conference',
          RendezvenyHelyszine: 'Budapest',
          SzabadHelyekSzama: 100
        }
      }
    }).as('getEvent');
  });

  it('should display the page title', () => {
    cy.visit('http://localhost:3000/events');
    cy.get('h1').contains('Rendezvények');
  });

  it('should display the event details', () => {
    cy.visit('http://localhost:3000/events');
    cy.wait('@getEvents');
    cy.get('.card').should('have.length', 1);
    cy.get('.card').within(() => {
      cy.get('p').contains('Rendezvény neve: Event 1');
      cy.get('p').contains('Időpont: 2023-06-01');
      cy.get('p').contains('Előadó neve és titulusa: John Doe, PhD');
      cy.get('p').contains('Téma: Technology');
      cy.get('p').contains('Típus: Conference');
      cy.get('p').contains('Helyszín: Budapest');
      cy.get('p').contains('Szabad helyek száma: 100');
    });
  });

  it('should navigate to the create event page', () => {
    cy.visit('http://localhost:3000/events');
    cy.get('a').contains('Új rendezvény hozzáadása').click();
    cy.url().should('include', '/events/create');
  });

  it('should navigate to the event details page', () => {
    cy.visit('http://localhost:3000/events');
    cy.wait('@getEvents');
    cy.get('.card').within(() => {
      cy.get('a').contains('Részletek').click();
    });
    cy.url().should('include', 'http://localhost:3000/events/details/1');
  });

  it('should navigate to the edit event page', () => {
    cy.visit('http://localhost:3000/events');
    cy.wait('@getEvents');
    cy.get('.card').within(() => {
      cy.get('a').contains('Módosít').click();
    });
    cy.wait('@getEvent');
    cy.url().should('include', 'http://localhost:3000/events/edit/1');
  });

  it('should delete the event', () => {
    cy.intercept('DELETE', 'http://localhost:5000/deleteEvent', {
      statusCode: 200,
      body: {
        success: true
      }
    }).as('deleteEvent');

    cy.visit('http://localhost:3000/events');
    cy.wait('@getEvents');
    cy.get('.card').within(() => {
      cy.get('button').contains('Töröl').click();
    });

    cy.wait('@deleteEvent');
    cy.get('.card').should('have.length', 0);
  });
});