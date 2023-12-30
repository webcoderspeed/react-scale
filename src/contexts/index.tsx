import React from 'react';
import LanguageTranslationProvider from './useLanguageTranslation';
import ThemeProvider from './useTheme';

interface Props {
  providers: (({ children }: { children: React.ReactNode }) => React.JSX.Element)[];
  children: React.ReactNode;
}

function AppContext(props: Props) {
  const { providers = [], children } = props;

  return (
    <>
      {providers.reduce(
        (acc, Provider) => (
          <Provider>{acc}</Provider>
        ),
        children,
      )}
    </>
  );
}

function AppProvider({ children }: { children: React.ReactNode }) {
  const providers = [LanguageTranslationProvider, ThemeProvider];

  return <AppContext providers={providers}>{children}</AppContext>;
}

export default AppProvider;
