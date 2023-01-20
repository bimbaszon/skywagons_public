import React, { useEffect, useState } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ReactPlayer from 'react-player/youtube';
import { getTestimonials } from "../services";


const TestimonialSlider = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        getTestimonials().then((result) => {
            setTestimonials(result);
        });
    }, []);
	
	const zoomInProperties = {
		indicators: true,
		scale: 1,
		duration: 3000,
		transitionDuration: 500,
		infinite: true,
		arrows: true,
		autoplay: false,
		canSwipe: true,
		prevArrow: <button className=""><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg></button>,
    	nextArrow: <button className=""><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg></button>
}
		
		

	return (
		<div className="bg-gray-300 content-center place-self-center p-1">

			<Zoom {...zoomInProperties}>
				{testimonials.map((testimonial, index) => (
					<div key={index} className="text-xs p-10 overflow-hidden place-self-center">
						<p className="italic text-justify tracking-wide leading-relaxed">"{testimonial.comment}"</p>
                        <h3 className="pb-2 pt-2 pl-4 font-medium text-right">{testimonial.name}</h3>
					</div>
					
					
				))}
					
			</Zoom>
		</div>
	);
};

export default TestimonialSlider;

