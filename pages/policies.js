import React from 'react'
import Head from 'next/head'
import { Link } from "react-router-dom";

import { GraphQLClient, request, gql } from 'graphql-request';

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT)

const QUERY = gql`
{
  policies {
    policyText {
      html
      raw
    }
  }
}
`

export async function getStaticProps() {
  const {policies} = await graphcms.request(QUERY)

  return {
    props: {
      policies
    }
  }
}

const policies = ( {policies} ) => {
  return (
    <div className="content-container">
         <Head>
        <title>Skywagon's Purchase Policies | Skywagons.com</title>
        <meta property="og:title" content="Skywagon's Purchase Policies | Skywagons.com" key="title" />
     
      </Head>
      <h1 className="text-xl p-8">Policies</h1>
        <div className="px-8 pb-8">
        <h1 className="pb-2">Skywagons' Purchase Policies</h1>
        <div>
        {policies.map((content, index) => (
          <div key={index} className="p-2">
            <div dangerouslySetInnerHTML={{__html: content.policyText.html}} />
          </div>
        ))}
      </div>
        </div>
    </div>
  )
}

export default policies
