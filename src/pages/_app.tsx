import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import theme from '../theme';

export default function MyApp({ pageProps, Component }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}