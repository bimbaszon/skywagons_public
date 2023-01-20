import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { getAbout } from '../services'


const About = () => {

    const [about, setAbout] = useState([]);

    useEffect(() => {
      getAbout().then((result) => {
        setAbout(result)
      })
    
    }, []);

   return (
    <div>
        {about.map((about, index) => (
            <div className="grid grid-cols-3 justify-items-center content-center pl-20 pr-20 sm:block sm:p-4 md:block ">
            <div key={index} className="my-10 col-span-2">   
                <h1 className="text-xl font-bold pb-4">{about.welcome}</h1>
                <h2 className="text-xs text-justify font-medium leading-loose">{about.about}</h2>
            </div>
            <div className="my-10 pl-6 pt-10 justify-self-end sm:pt-0 md:pt-0 sm:my-0">
                <img 
                    src={about.photo.url}
                    alt={about.photoInfo}
                    className="h-60"
                />
                <h2 className="text-sm font-bold pt-2">{about.photoInfo}</h2>
            </div>
                
           
            </div>
        ))}
    </div>
   ) 
}
 

export default About