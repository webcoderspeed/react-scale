module.exports = {
  types: [
    { value: '✨ feat', name: '✨ feat:A new feature' },
    { value: '🐛 fix', name: '🐛 fix: A bug fix' },
    { value: '📚 docs', name: '📚 docs:Documentation changes' },
    { value: '💄 style', name: '💄 style:Code style changes (formatting, indentation)' },
    { value: '🔨 chore', name: '🔨 chore:Routine tasks, maintenance, or housekeeping' },
    {
      value: '🧪 test',
      name: '🧪 test:Adding or modifying tests, test infrastructure, or mock data',
    },
    {
      value: '🔧 refactor',
      name: '🔧 refactor: Code changes that enhance code structure or readability',
    },
  ],
  // Add your own scopes if needed
  scopes: [],
  ticketNumberPrefix: 'ISSUE-',
  allowCustomScopes: true,
  // Add custom scope prompt if allowCustomScopes is true
  customScopeRegex: /^[\w-]+$/,
  // Skip breaking change prompt
  allowBreakingChanges: ['feat', 'fix'],
  // Override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: 'Denote the SCOPE of this change (optional):',
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change (max 94 chars):\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },
  subjectLimit: 94,
};
