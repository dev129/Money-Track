import React from 'react';
import { SiPolkadot } from 'react-icons/si';
import '../styles/styles.css';

import LandingPage from '../public/LandingPage2.jpeg';
import Image from 'next/image';
import { SignedOut, SignInButton } from '@clerk/nextjs';

const RemoveBackground = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image - Full Cover */}
      <div className="absolute inset-0">
        <Image
          src={LandingPage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Title text */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-left px-8">
        {/* Semi-transparent background to improve text visibility */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Moneytrack
          </h1>
          <p className="mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl">
            Your personal web3 portfolio
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              <SignedOut>
                <SignInButton/>
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
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Tell Me More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
