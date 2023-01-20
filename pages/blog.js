import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Link } from 'next/link';
import { getRecents } from '../services';

export default function news() {
  const [recents, setRecents] = useState([]);

    useEffect(() => {
      getRecents().then((result) => {
        setRecents(result);
      })
    }, [])

  return (
    <div className="content-container">
      <Head>
        <title>Blog | Skywagons.com</title>
        <meta property="og:title" content="Blog | Skywagons.com" key="title" />
       
      </Head>
      <h1 className="text-xl p-8">Recent News</h1>
      <div className="pb-4">
        {recents.map((content, index) => (
          <div key={index} className="p-2 border-b-4 mx-20 my-6">
            <a href={`/news/${content.slug}`}><h1 className="pb-6 font-semibold">{content.newsTitle}</h1></a>
            {content.photo
            ? <img src={content.photo.url}/>
            : null
            }
            <a href={`/news/${content.slug}`}><div dangerouslySetInnerHTML={{__html: content.newsText.html.split('.')[0] + "...."}}/></a>
            <a href={`/news/${content.slug}`}>
              <button class="bg-gray-300 py-1 px-2 mb-4 font-light text-black inline-flex items-center space-x-2 rounded">
                Read more
              </button></a>            
          </div>
        ))}
      </div>

    </div>
  )
}

