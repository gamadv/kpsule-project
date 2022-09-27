import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { CartProvider } from "../context/CartContext";
import { defaultTheme, darkTheme } from "../styles/themes";
import type { AppProps } from "next/app";
import { Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartProvider>
          <Header />
          <GlobalStyle />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
