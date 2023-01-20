import React from "react";
import SimpleImageSlider from 'react-simple-image-slider';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ImageGallery from 'react-image-gallery';

const AircraftDetail = ({ aircraft }) => {
  
  const images = 
    {
      original: aircraft.gallery.map((photo) => photo.url),
      thumbnail: aircraft.gallery.map((photo) => photo.url)
    }
  
  let formattedImages = [];

  console.log('images: ', images)

  images.thumbnail.map((element, index) => {
    formattedImages.push({thumbnail: element, original: images.original[index]});
  })

  console.log(formattedImages)

  function renderLeftNav(onClick, disabled) {
    return (
      <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Back"
    >
      
      
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
  <g>
    <polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707"/>
    <polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707"/>
  </g>
</svg>
<p className="text-xl font-black pr-2 text-left">Back</p>


    </button>
    
      
      
    );
  }


  function renderRightNav(onClick, disabled) {
    return (
      <button
      type="button"
      className="image-gallery-icon image-gallery-right-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Next"
    >
      
      
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
  <g>
    <polygon points="11.707 3.293 10.293 4.707 17.586 12 10.293 19.293 11.707 20.707 20.414 12 11.707 3.293"/>
    <polygon points="5.707 3.293 4.293 4.707 11.586 12 4.293 19.293 5.707 20.707 14.414 12 5.707 3.293"/>
  </g>
</svg>

<p className="text-xl font-black pl-2 text-right">Next</p>


    </button>
      
    );
  }


 
  return (
      <div>
        <div  className="p-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0"> <h1 className="text-xl font-bold">{aircraft.title}</h1></div>
       
			<ImageGallery items={formattedImages}
      showIndex={true}
      slideDuration={250}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav}
      
       />

        <div className="p-4 max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="pb-4">
            <h1 className="text-md font-semibold">Description:</h1>
            <div dangerouslySetInnerHTML={{__html: aircraft.description.html}} className="leading-loose text-sm"/>
          </div>
          <div className="pb-4">
            <h1 className="text-md font-semibold">Avionics:</h1>
            <div dangerouslySetInnerHTML={{__html: aircraft.avionics.html}}  className="leading-loose text-sm"/>
          </div>
          <div className="pb-4">
            <h1 className="text-md font-semibold">Airframe:</h1>
            <div dangerouslySetInnerHTML={{__html: aircraft.airframe.html}} className="leading-loose text-sm" />
          </div>
          <div className="pb-4">
            <h1 className="text-md font-semibold">Interior:</h1>
            <div dangerouslySetInnerHTML={{__html: aircraft.interior.html}} className="leading-loose text-sm" />
          </div>
          <div className="pb-4">
            <h1 className="text-md font-semibold">Exterior:</h1>
            <div dangerouslySetInnerHTML={{__html: aircraft.exterior.html}} className="leading-loose text-sm" />
          </div>
          <div className="pb-4">
            <h1 className="text-md font-semibold">History:</h1>
            <div dangerouslySetInnerHTML={{__html: aircraft.histo.html}} className="leading-loose text-sm" />
          </div>
          <div className="pb-4">
            <h1 className="text-md font-semibold">Price:</h1>
            <h2 className="leading-loose text-sm">{aircraft.price}</h2>
          </div>
          <div>
            {aircraft.logs
            ? <a href={aircraft.logs.url} target="blank"><button className="text-xs mb-4 hover:text-sm border-2 border-gray-400 border-double p-2">Read logbooks here</button></a>
            : null
            }
          </div>
          <div className="pb-4">
            <h1 className="text-md font-semibold">Status:</h1>
            <h2>For Sale</h2> 
          </div>
          <div>
            {aircraft.videoUrl  
            ?  <ReactPlayer url={aircraft.videoUrl} /> 
            : null
            }
          </div>
        </div>
      </div>
    )
}

export default AircraftDetail