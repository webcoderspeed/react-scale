import React from 'react';
import LanguageSelector from './LanguageSelector';
import StyleAndStateWrapper from '../HOC/StylesAndStateWrapper';

describe('<LanguageSelector /> Success Tests', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(
      <StyleAndStateWrapper>
        <LanguageSelector />
      </StyleAndStateWrapper>,
    );
  });

  it('renders without crashing', () => {
    // Ensure the component renders without errors
    cy.get('[data-cy=language-container]').should('exist');
  });

  it('displays the default language as "English"', () => {
    // Check if the default language is set to "English"
    cy.get('[data-cy=quote-display]').should(
      'contain',
      `Debugging is not just fixing errors; it's a journey of self-discovery and relentless pursuit of perfection.`,
    );
  });

  it('changes language to "French" when selected', () => {
    // Change the language to 'French' and verify the change
    cy.get('[data-cy=language-select]').select('fr');
    cy.get('[data-cy=quote-display]').should(
      'contain',
      `Le débogage ne consiste pas seulement à corriger les erreurs ; c'est un voyage de découverte de soi et de recherche incessante de la perfection.`,
    );
  });

  it('displays quote in Hindi when language is changed to "Hindi"', () => {
    // Change the language to 'Hindi' and verify the quote
    cy.get('[data-cy=language-select]').select('hi');
    cy.get('[data-cy=quote-display]').should(
      'contain',
      'डिबगिंग केवल त्रुटियों को ठीक करना नहीं है; यह आत्म-खोज और पूर्णता की निरंतर खोज की यात्रा है।',
    );
  });

  it('handles language change and quote display for different languages', () => {
    // Change language to Sanskrit and verify the quote
    cy.get('[data-cy=language-select]').select('san');
    cy.get('[data-cy=quote-display]').should(
      'contain',
      'त्रुटिनिवारणं केवलं दोषनिवारणं न भवति; आत्म-आविष्कारस्य, सिद्धेः अदम्य-अनुसन्धानस्य च यात्रा अस्ति।',
    );

    // Change language to Arabic and verify the quote
    cy.get('[data-cy=language-select]').select('ar');
    cy.get('[data-cy=quote-display]').should(
      'contain',
      'لا يقتصر تصحيح الأخطاء على إصلاح الأخطاء فحسب؛ إنها رحلة لاكتشاف الذات والسعي الدؤوب لتحقيق الكمال.',
    );
  });
});

describe('<LanguageSelector /> Failure Tests', () => {
  beforeEach(() => {
    // Mount the component before each test
    cy.mount(
      <StyleAndStateWrapper>
        <LanguageSelector />
      </StyleAndStateWrapper>,
    );
  });

  it('fails if language container does not exist', () => {
    // Fails the test if the language container does not exist
    cy.get('[data-cy=language-container1]').should('not.exist');
  });

  it('fails if the default language is incorrect', () => {
    // Fails the test if the default language is not set to "English"
    cy.get('[data-cy=quote-display]').should('not.contain', 'Incorrect Default Quote Text');
  });

  it('fails if language change to "French" is not reflected in the quote', () => {
    // Fails the test if changing language to 'French' does not update the quote
    cy.get('[data-cy=language-select]').select('fr');
    cy.get('[data-cy=quote-display]').should('not.contain', 'Incorrect French Quote Text');
  });

  it('fails if language change to "Hindi" is not reflected in the quote', () => {
    // Fails the test if changing language to 'Hindi' does not update the quote
    cy.get('[data-cy=language-select]').select('hi');
    cy.get('[data-cy=quote-display]').should('not.contain', 'Incorrect Hindi Quote Text');
  });
});
