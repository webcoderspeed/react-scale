import React from 'react';
import AppProvider from '../contexts/index.tsx';
import '../index.css';

function StyleAndStateWrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

export default StyleAndStateWrapper;
