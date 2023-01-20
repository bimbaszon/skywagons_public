import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecentAircrafts } from '../services';


const RecentAircraft = () => {
    const [aircrafts, setAircrafts] = useState([]);

    useEffect(() => {
      getRecentAircrafts().then((result) => {
        setAircrafts(result);
      })
    }, [])


  return (
    
      <div>
      <div className="grid grid-cols-4 p-4 sm:block">
          {aircrafts?.map((content, index) => (
            <div key={index} className="m-2 p-4">
              <a href={`/airplane-for-sale/${content.slug}`}><img src={content.featuredImage.url} 
              className="hover:opacity-60"/></a>
              <a href={`/airplane-for-sale/${content.slug}`}><p className="m-2 text-xs font-semibold hover:font-normal">
                {content.title}
              </p></a>
              <h5 className="text-xs ml-4">{content.category.category}</h5>
            </div>
          ))} 
        </div>
        <div>
        
        </div>
      </div>
      
  
  );
}

export default RecentAircraft
