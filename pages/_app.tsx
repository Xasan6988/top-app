import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return(
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
      </Head>
      <Component {...pageProps}/>
    </>
  );
};

export default MyApp;
