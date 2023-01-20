import React from 'react';
import Head from 'next/head'
import { Slider, RecentAircraft, RecentNews, CommentsForm, TestimonialSlider, About } from '../components';
import Popup from 'reactjs-popup';




export default function Home() {

  return (
    <div className="content-container">
      <Head>
        <title>Skywagons.com | Your Aircraft Sales Specialists</title>
        <meta property="og:title" content="Skywagons.com | Your Aircraft Sales Specialists" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        
      </Head>
      <div className="pt-4">
        <Slider />
      </div>
      <div >
        <About />
      </div>
      <div>
        <h1 className="pl-6 font-bold text-lg">Recently Updated</h1>
        <RecentAircraft />
      </div>
      <div className="grid grid-cols-2 p-6 sm:block">
      <div>
        <h1 className="font-bold text-lg pb-4">Recent News</h1>
        <RecentNews />
      </div>
      <div className="pl-4 sm:pl-0 sm:mt-2 md:mt-2 md:pl-0 ">
        <h1 className="font-bold text-lg pb-4 pl-4 sm:pt-12 sm:pl-0">Testimonials</h1>
        <TestimonialSlider />
      <div className="p-4 grid justify-items-center">
        <Popup 
            trigger={<button 
            className="transition self-center duration-500 ease hover:bg-gray-200 bg-gray-300 text-md font-medium rounded text-black px-4 py-2 cursor-pointer"> Leave testimonial </button>} 
            modal>
        <CommentsForm />
        </Popup>
      </div> 
      </div>
      </div>
    </div>
  );
}


