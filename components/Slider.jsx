import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ReactPlayer from 'react-player/youtube';

const Slider = () => {
	//Array of Images
	const images = [
		"slideshow/slide1.jpeg",
        "slideshow/slide2.jpeg",
		"slideshow/slide3.jpeg",
        "slideshow/slide4.jpeg",
        "slideshow/slide5.jpeg",
	];



	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: false,
		scale: 1,
		duration: 3000,
		transitionDuration: 500,
		infinite: true,
		arrows: false,
		
		
		
	};
	return (
		<div className="index">

			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-96 sm:h-36 z-10">
						<img
							className="w-11/12 object-cover shadow-xl z-0"
							src={each}
						/>
						
					</div>
					
					
				))}
				<div className="flex justify-center w-full h-96 sm:h-36 z-0">
				<iframe 
					className="z-0"
					width="80%" 
					height="auto" 
					src="https://www.youtube.com/embed/n3Q_zUtZy7E" 
					frameborder="0" 
					allow="accelerometer; 
					autoplay; 
					clipboard-write; 
					encrypted-media; 
					gyroscope; 
					picture-in-picture" 
					allowfullscreen>
				</iframe>
				</div>
				
					
			</Zoom>
		</div>
	);
};

export default Slider;

