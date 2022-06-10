describe('navigation', () => {
	beforeEach(() => {
		cy.visit(Cypress.env('base_url'));
	});

	it('displays the navbar', () => {
		cy.get('[data-testid="navbar"]').should('exist');
	});

	it('navigates to the about page, where the navbar still exists', () => {
		const navbar = cy.get('[data-testid="navbar"]');
		const aboutLink = cy.get('[data-testid="nav-about"]');
		aboutLink.should('exist');
		aboutLink.click();
		cy.get('h1').should('contain.text', 'About');
		navbar.should('exist');
	});

	it('navigates to the imprint page, where the navbar still exists', () => {
		const navbar = cy.get('[data-testid="navbar"]');
		const imprintLink = cy.get('[data-testid="nav-imprint"]');
		imprintLink.should('exist');
		imprintLink.click();
		cy.get('h1').should('contain.text', 'Imprint');
		navbar.should('exist');
	});
});
