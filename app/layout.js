'use client'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Navbar from './components/Navbar'
import backgroundImage from '../app/public/LandingPark.png' // Replace with your actual background image



export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body 
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            position: 'relative'
          }}
        >
          <Navbar />
          
          {/* Main content - potentially add a semi-transparent overlay */}
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}