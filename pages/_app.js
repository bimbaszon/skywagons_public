import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Head from 'next/head';



import { Layout } from '../components';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="shortcut icon" href="plane_solo.png" />
    </Head>

    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>

  )
}

export default MyApp;
