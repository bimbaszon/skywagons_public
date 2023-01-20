import React from 'react'
import { Link } from "next/link";
import { GraphQLClient, gql } from 'graphql-request';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head'
import NewsDetail from '../../components/NewsDetail';
import { getNewsDetails, getRecents } from '../../services'

export default function Home({ recent }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
  
    <div className='content-container'>
        <Head>
        <title>{recent.newsTitle}</title>
        <meta property="og:title" content={recent.newsText} key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
   
      </Head>
      <NewsDetail recent={recent}/>
      
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getNewsDetails(params.slug);
  return {
    props: {
      recent: data,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const recents = await getRecents();
  return {
    paths: recents.map(( { slug } ) => ({ params: { slug } })),
    fallback: true,
  };
}