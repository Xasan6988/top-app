import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="favicon.ico" />
        <meta
          name='description'
          content='Generated by create next app'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
