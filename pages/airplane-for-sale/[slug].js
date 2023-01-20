import React from 'react'
import Head from 'next/head'
import { Link } from "next/link";
import { useRouter } from 'next/router';
import AircraftDetail from '../../components/AircraftDetail';
import Form  from '../../components/Form';
import { getAircraftDetails, getAircrafts } from '../../services'

export default function Home({ aircraft }) {
  const router = useRouter();
  
  

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  
  return (


    <div className='content-container'>
      <Head>
        <title>{aircraft.title}</title>
        <meta property="og:title" content={aircraft.description} key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
      </Head>
      <AircraftDetail aircraft={aircraft}/>
      <Form aircraft={aircraft}/>

    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getAircraftDetails(params.slug);
  return {
    props: {
      aircraft: data,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const aircrafts = await getAircrafts();
  return {
    paths: aircrafts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}