import { ReactNode } from 'react';
import { Provider as JotaiProvider, useAtomValue } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { themeObjectAtom } from '../atoms/themeAtom';

const client = new QueryClient();

function InnerProviders({ children }: { children: ReactNode }) {
  const theme = useAtomValue(themeObjectAtom);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      <JotaiProvider>
        <InnerProviders>{children}</InnerProviders>
      </JotaiProvider>
    </QueryClientProvider>
  );
}
