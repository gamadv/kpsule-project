import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { defaultTheme, darkTheme } from "../styles/themes";
import type { AppProps } from "next/app";
import { Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
