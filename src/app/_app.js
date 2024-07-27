// pages/_app.js
import Head from 'next/head';
import "./globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Abraham Renovations</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
