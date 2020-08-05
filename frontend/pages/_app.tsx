import Head from "next/head";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  font-family: 'Montserrat', sans-serif;
}
input,
button,
submit {
  -webkit-border-radius: 0;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  outline: none;
}

`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>front-end test for take me tour</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
