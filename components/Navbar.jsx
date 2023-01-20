import React, { useState } from 'react'
import Link from 'next/link';


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
   
    <div className="">
      <nav className="navbar">
      <ul className="">
            <li className="">
              <Link href="/">
                <a className="text-center block py-4 px-6">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/airplane-for-sale">
                <a className="text-center block py-4 px-6 ">Airplanes For Sale</a>
              </Link>
            </li>
            <li>
              <Link href="/sell-your-aircraft">
                <a className="text-center block py-4 px-6">Sell Your Aircraft</a>
              </Link>
            </li>
            <li>
              <Link href="/videos">
                <a className="text-center block py-4 px-6">Videos</a>
              </Link>
            </li>
            <li>
              <Link href="/policies">
                <a className="text-center block py-4 px-6">Policies</a>
              </Link>
            </li>
            <li>
              <Link href="/resources">
                <a className="text-center block py-4 px-6">Resources</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a className="text-center block py-4 px-6">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="text-center block py-4 px-6">News</a>
              </Link>
            </li>
          </ul>
      </nav>

      <div className="sm:flex md:flex items-center justify-end border-b border-gray-400 py-6 hidden bg-white mt-0">
      <nav>
        <section className="MOBILE-MENU flex justify-end mr-10">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/">Home</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/airplane-for-sale">Airplanes For Sale</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/sell-your-aircraft">sell your aircraft</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/videos">Videos</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/policies">policies</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/resources">resources</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/contact-us">Contact</a>
              </li>
              <li className="border-b border-gray-400 my-4 uppercase">
                <a href="/blog">news</a>
              </li>
            </ul>
          </div>
        </section>

        
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    
    </div>
    
  )
}

export default Navbar