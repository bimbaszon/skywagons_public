import React from 'react'
import Head from 'next/head'
import { Link } from "react-router-dom";
import { Iframe } from 'react-iframe'
import { GraphQLClient, request, gql } from 'graphql-request';
import { RichText } from "@graphcms/rich-text-react-renderer";
import { convertToObject } from 'typescript';


const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT)


const QUERY = gql`
  query MyQuery {
    contacts {
      address {
        text
        raw
        html
      }
      businessHours {
        html
      }
    officeManager {
      html
    }
    owner {
      html
    }
    phoneNumbers {
      html
    }
    }
    }

`

export async function getStaticProps() {
  const { contacts } = await graphcms.request(QUERY);

  return {
    props: { contacts }
  }
};

const contact = ({ contacts }) => {
  return (
    

    <div className="content-container">
      <Head>
        <title>Contact us | Skywagons.com</title>
        <meta property="og:title" content="Contact us | Skywagons.com" key="title" />
     
      </Head>
      <div className="text-xl p-8"><h1>Contact Us</h1></div>
      
    <div className="grid grid-cols-4 p-4 sm:block">

     
      <div className="text-sm leading-relaxed">
      {contacts?.map((content, index) => ( 
      <div>
      <div className="pb-2">

        <h1 className="pb-4 font-bold">Contact us any time!</h1>
        <h1 className="pb-2 font-semibold">General inquiries</h1>
        <div dangerouslySetInnerHTML={{__html: content.address.html}} className="leading-loose text-sm" />

      </div>
      <div className="pb-6">
      <div dangerouslySetInnerHTML={{__html: content.owner.html}} className="leading-loose text-sm" />
      </div>
      <div className="pb-6">
      <div dangerouslySetInnerHTML={{__html: content.officeManager.html}} className="leading-loose text-sm" />
      </div>
      <div>
      <div dangerouslySetInnerHTML={{__html: content.businessHours.html}} className="leading-loose text-sm" />
      </div>
      <div>
      <div dangerouslySetInnerHTML={{__html: content.phoneNumbers.html}} className="leading-loose text-sm" />
      </div>
      </div>

))}
      </div>
      <div className="grid justify-items-end col-span-3">
      <iframe 
      className=""
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.803948391571!2d-120.76013608731752!3d38.72230990851749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809a5a805856e11b%3A0x4456f84950526217!2sSkywagons.com!5e0!3m2!1sen!2sus!4v1654043386015!5m2!1sen!2sus" 
      width="100%" 
      height="100%" 
      style={{border:0}} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      
      </iframe>
      </div>
      </div>
    </div>
  )
}



export default contact

