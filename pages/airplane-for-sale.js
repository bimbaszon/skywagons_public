import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Link } from "next/link";
import Image from 'next/image';
import { getAirplanesForSale } from '../services';

export default function forSale() {
  const [categories, setCategories] = useState([]);

    useEffect(() => {
      getAirplanesForSale().then((result) => {
        setCategories(result);
      })
    }, [])

  return (
    <div className="content-container">
      <Head>
        <title>Airplanes for Sale | Skywagons.com</title>
        <meta property="og:title" content="Airplanes for Sale | Skywagons.com" key="title" />
       
      </Head>
      <h1 className="text-xl p-8">Airplanes for sale</h1>
      <div>
          <div>
            {categories?.map((cat, index) => (
              <div key={index} className="pl-8 sm:pl-4">
                <h1 className="font-semibold py-4 text-md sm:text-sm">{cat.category}</h1>
                <div>
                  {cat.aircrafts.map((aircraft, index) => (
                    <div key={index} className="flex">
                      {aircraft.featuredImage
                      ? <a href={`/airplane-for-sale/${aircraft.slug}`}><img className="w-28 hover:opacity-50 pl-2 pr-5 pb-4"src={aircraft.featuredImage.url} /></a>
                      : null
                      }<a href={`/airplane-for-sale/${aircraft.slug}`}><h1 className="text-xs pt-4 hover:text-sm">{aircraft.title}</h1></a>

                    </div>
                  ))}
                </div>
                
              </div>
            ))}

          </div>
      </div>
    </div>
  )
}

