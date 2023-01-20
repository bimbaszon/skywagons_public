import React, { useState } from 'react'
import Head from 'next/head'
import { Link } from 'next/link';
import { getResources } from '../services';
import Resource from '../components/Resource';
import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT)

export default function ResourcesPage({ resources }){

  return (
    <div className="content-container">
         <Head>
        <title>Resources | Skywagons.com</title>
        <meta property="og:title" content="Resources | Skywagons.com" key="title" />
       
      </Head>
      <h1 className="text-xl p-8">
        Resources
      </h1>
     
      <div className="mx-auto flex flex-col px-8">
          {resources?.map((content, index) => (
            <div key={index} className="my-2">
              <a href={content.resourceLink} className="text-md font-bold">
                {content.resourceTitle}   </a>
              <p className="text-sm my-5 text-justify font-medium">
                {' '}
                {content.resourceDescription}{' '}
              </p>
            </div>
          ))}
          <a href="cessna-skywagon-year-changes"><h1 className="text-md font-bold mb-5 pb-4 text-md">CESSNA MODEL YEAR CHANGES</h1></a>
        </div>

     
    </div>
  )
}

export async function getStaticProps() {
  const resources = await getResources();

  return {
    props: { resources }
  }
}
