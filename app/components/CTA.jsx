import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const CTA = () => {
    return (
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">
            So, What Are You Waiting For? Join Now and Start Tracking Your Crypto!
          </h2>
          <p className="text-xl mb-8">
            Unlock the full potential of your crypto investments with real-time tracking, secure Web3 login, and multi-wallet support. Don’t miss out!
          </p>
          <div>
            <Link
              href="#"  // Link to your signup page or wallet login page
              className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300"
            >
                 <SignedOut>
                    <SignInButton >
                        Get Started Now
                        </SignInButton>
                                 {/* Before login user button*/ }
                  </SignedOut>
                  <SignedIn>
        <UserButton />
      </SignedIn>
              
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTA;
  