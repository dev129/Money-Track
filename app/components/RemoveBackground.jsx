import React from 'react';
import '../styles/styles.css';
import TeamIcon from '../public/Logo.png';
import LandingPage from '../public/LandingPark.png';
import Image from 'next/image';
import { SignedOut, SignInButton } from '@clerk/nextjs';
import TellMeMore from '../components/TellMeMore'

const RemoveBackground = () => {
  // Function to handle scroll when the "Tell Me More" button is clicked
  
  return (
    <div className="relative w-full h-screen">
      {/* Background Image - Full Cover */}
      <div className="absolute inset-0">
        <Image
          src={LandingPage}
          alt="Background"
          layout="fill"
          style={{objectFit:'cover'}}
          quality={100}
          priority
        />
      </div>

      {/* Title text */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-left px-8">
        {/* Semi-transparent background to improve text visibility */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
          {/* Center the image */}
          <div className="flex justify-center mb-4">
            <Image src={TeamIcon} alt="Team Logo" height={300} width={300} />
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <TellMeMore/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
