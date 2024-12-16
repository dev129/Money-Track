'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRef } from "react";

const CTA = () => {
  // Create a ref to target the section you want to scroll to (e.g., "AboutUs" or "Parking Features")
  const aboutUsRef = useRef(null);

  // Function to handle scroll
  const handleScrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-green-500 to-teal-600 py-16 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Find Your Parking Spot? Get Started Now!
        </h2>
        <p className="text-xl mb-8">
          With our smart parking system, you can easily find and book available parking slots, secure EV charging stations, and enjoy seamless payments with MetaMask or UPI.
        </p>
        <div>
          {/* Button to trigger scroll action */}
          <button
            onClick={handleScrollToAboutUs}
            className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300"
          >
            <SignedOut>
              <SignInButton>
                Get Started Now
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
