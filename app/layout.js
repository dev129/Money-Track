'use client'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'
import { useState } from 'react';
import TeamIcon from './public/TeamLogo2.png'
import Image from 'next/image';
import Link from 'next/link';
export default function RootLayout({ children }) {
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
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <div className="navbar bg-base-100 relative">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                    onClick={toggleSidebar} // Toggle the sidebar when clicked
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
              <div className="navbar-center text-white align-middle  ">
                MONEY
                <Image src={TeamIcon} alt='' height={50} width={50}  className='bg-green-500 bg-clip-text '/>
                TRACK
              </div>
              <div className="navbar-end">
                <button className="btn btn-ghost">
                  <SignedOut>
                    <SignInButton /> {/* Before login user button*/ }
                  </SignedOut>
                  <SignedIn>
        <UserButton />
      </SignedIn>
                </button>
              </div>
              {/* CTA Button at the bottom of the navbar */}

            </div>
          </header>

          {/* Overlay when the sidebar is open */}
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
                <li></li>
                <li>
                  <SignedOut>
                    <SignInButton /> {/* Before login user button*/ }
                  </SignedOut>
                  <SignedIn>
        <UserButton />
      </SignedIn>
      </li>
              </ul>
            </div>
          </div>

          {/* Main content */}
          <main>{children}</main>

              
        </body>
      </html>
    </ClerkProvider>
  );
}


