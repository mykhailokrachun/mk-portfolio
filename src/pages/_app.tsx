import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout';
import { ContextProvider } from '../components/context';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ContextProvider>
        <Layout>
          <NextNProgress
            color='var(--text-alt)'
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </ThemeProvider>
  );
}
