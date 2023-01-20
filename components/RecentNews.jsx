import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecentNews } from '../services';


const RecentNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
      getRecentNews().then((result) => {
        setNews(result);
      })
    }, [])


  return (
    
      <div>
      <div className="h-64 space-y-4">
          {news?.map((content, index) => (
            <div>
            <div key={index} className="py-6 px-2 mb-4 border-2 border-gray-300 cursor-pointer">
              <a href={`/news/${content.slug}`}><h1 className="text-xs pb-2">{content.newsDate}</h1></a>
              <a href={`/news/${content.slug}`}><h1 className="font-semibold text-xs pb-2">
                {content.newsTitle}
              </h1></a>
              
              <a href={`/news/${content.slug}`}><div dangerouslySetInnerHTML={{__html: content.newsText.html.split('.')[0] + "...."}}
              className="text-xs"/></a>
              </div>
            </div>
          ))} 
          </div>
      </div>
      
  
  );
}

export default RecentNews