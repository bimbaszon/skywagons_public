import React from 'react'
import Head from 'next/head'

import { GraphQLClient, request, gql } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT)

const QUERY = gql`
{
    cessnaModels {
        content {
          html
        }
      }
}
`

export async function getStaticProps() {
  const {cessnaModels} = await graphcms.request(QUERY)

  return {
    props: {
      cessnaModels
    }
  }
}

const cessnaModels = ({ cessnaModels }) => {
  return (
    <div className="content-container">
         <Head>
        <title>Cessna Skywagon Year Changes | Skywagons.com</title>
        <meta property="og:title" content="Cessna Skywagon Year Changes | Skywagons.com" key="title" />
     
      </Head>
      <h1 className="text-xl p-8">Cessna Skywagon Year Changes</h1>
        <div className="px-8 pb-8">
        {cessnaModels.map((content, index) => (
          <div key={index} className="p-2">
            <div dangerouslySetInnerHTML={{__html: content.content.html}} />
          </div>
        ))}
        </div>
    </div>
  )
}

export default cessnaModels
