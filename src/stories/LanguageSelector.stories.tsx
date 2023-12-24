import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LanguageSelector from '../components/LanguageSelector.tsx';
import '../index.css';
import StyleAndStateWrapper from '../HOC/StylesAndStateWrapper.tsx';

const meta = {
  title: 'Example/LanguageSelector',
  component: LanguageSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: ` The \`LanguageSelector\` component is a crucial part of the Example library, providing users with the ability to select their preferred language. 
        It is designed to work seamlessly with the useLanguageTranslation context, handling language change events efficiently.

        ### Usage
        \`\`\`jsx
        import LanguageSelector from '../path/to/LanguageSelector';

        function YourComponent() {
          return (
            <div>
              {/* ... your component content ... */}
              <LanguageSelector />
              {/* ... other components or content ... */}
            </div>
          );
        }

        export default YourComponent;
        \`\`\`

        ### Features
        - Dropdown menu for language selection.
        - Responsive design using Tailwind CSS classes.
        - Integration with the useLanguageTranslation context.

        ### Implementation Details
        - Relies on the i18next library for translation.
        - Displays language options for English (en), Hindi (hi), Arabic (ar), Sanskrit (san), and French (fr).
        - Styled using Tailwind CSS for a clean and modern look.

        ### Notes
        - Ensure the useLanguageTranslation context is set up in your application.
        - Define the 'quote' translation key in your translation files for the displayed quote.

`,
      },
    },
  },
  tags: ['autodocs'],
} as Meta<typeof LanguageSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LanguageSelectorStory: Story = {
  name: 'LanguageSelector',
  render: () => (
    <StyleAndStateWrapper>
      <LanguageSelector />
    </StyleAndStateWrapper>
  ),
};
