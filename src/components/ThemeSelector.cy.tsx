import React from 'react';
import ThemeSelector from './ThemeSelector';
import StyleAndStateWrapper from '../HOC/StylesAndStateWrapper';

describe('<ThemeSelector />', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(
      <StyleAndStateWrapper>
        <ThemeSelector />
      </StyleAndStateWrapper>,
    );
  });

  it('renders with the default theme', () => {
    cy.get('[data-cy=theme-container]').should('exist');
    cy.get('[data-cy=theme-select]').should('exist');
    cy.get('[data-cy=theme-select]').should('have.value', 'base');
  });

  it('changes the theme when selecting "Dark Theme"', () => {
    cy.get('[data-cy=theme-select]').select('dark');
    cy.get('[data-cy=theme-select]').should('have.value', 'dark');
  });

  it('changes the theme when selecting "Base Theme"', () => {
    cy.get('[data-cy=theme-select]').select('dark');
    cy.get('[data-cy=theme-select]').should('have.value', 'dark');

    cy.get('[data-cy=theme-select]').select('base');
    cy.get('[data-cy=theme-select]').should('have.value', 'base');
  });
});
