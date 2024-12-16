'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ErrorPage = () => {
  const router = useRouter();

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-16">
      {/* 404 Title and Message */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-xl">It looks like the page you're looking for doesn't exist.</p>
      </div>

            {/* Helpful Links */}
      <div className="text-center">
        <p className="mb-4">But don't worry, you can easily find your way back:</p>
        <div className="flex justify-center gap-6">
          <Link href="/" passHref>
            <span className="bg-yellow-500 text-gray-900 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-400 transition-all">
              Go to Home
            </span>
          </Link>
          <button onClick={()=>router.back()} >
            <span className="bg-transparent border border-2 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all">
              Go Back
            </span>
          </button  >

          
        </div>
      </div>

      {/* Go Back Button */}
      
    </section>
  );
};

export default ErrorPage;
