import React from 'react';
import RemoveBackground from './RemoveBackground';
import Footer from './Footer';
import FAQ from '../components/FAQ';
import Reviews from './Review';
import AboutUs from './AboutUs';
import CTA from './CTA';

const SignedOut = () => {
  return (
    <>
      
        <div >
          {/* You can add content here, like a heading */}
          <RemoveBackground />
        </div>

      <div className="min-h-screen" id='AboutUs'>
        <AboutUs />
      </div>

      <div className="min-h-screen">
        <Reviews />
      </div>

      <div className="min-h-screen">
        <FAQ />
      </div>

      <div>
        <CTA />
      </div>

      <Footer />
    </>
  );
};

export default SignedOut;
