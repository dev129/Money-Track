'use client'
import React from 'react'
 const TellMeMore = () => {
    const handleScrollToAboutUs = () => {
        const aboutUsSection = document.getElementById("AboutUs");
        if (aboutUsSection) {
          aboutUsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    
    return(

        <button
        onClick={handleScrollToAboutUs} // Trigger scroll
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 hover:text-black dark:focus:ring-gray-800"
        >
              Tell Me More
            </button>
            )
 }
 export default TellMeMore;