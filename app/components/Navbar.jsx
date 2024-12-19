'use client';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import '../globals.css';
import { useState } from 'react';
import TeamIcon from '../public/ParkMate Logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="navbar bg-opacity-0 bg-transparent w-full relative"> {/* Fully transparent background */}
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white" // Ensure visibility on background
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center text-white flex items-center space-x-2">
          
          <Image
            src={TeamIcon}
            alt="Team Logo"
            height={50}
            width={50}
          />
          
        </div>

        {/* Navbar End */}
        <div className="navbar-end  text-white  ">
            <SignedOut >
              <SignInButton className='btn btn-ghost  sm:text-lg md:text-lg xl:text-lg '/> {/* Button for users not signed in */}
            </SignedOut>
            <SignedIn>
              <UserButton /> {/* Button for signed-in users */}
            </SignedIn>  
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={closeSidebar} // Close sidebar when clicking on the overlay
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-base-100 shadow-md transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
        >
          &times; {/* Close symbol */}
        </button>

        <div className="p-4">
          <ul className="menu menu-compact">
            <li><Link href="/">Homepage</Link></li>
            <li><Link href="#">Portfolio</Link></li>
            <li><Link href="#">About</Link></li>
            <li>
              <SignedOut>
                <SignInButton /> {/* Button before user signs in */}
              </SignedOut>
              <SignedIn>
                <UserButton /> {/* Button after user is signed in */}
              </SignedIn>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;