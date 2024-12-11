'use client'
import { useState } from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Alice Johnson',
      rating: 5,
      review: 'This platform has completely transformed the way I track my crypto investments. The web3 integration makes it seamless to check my profits and losses in real time. Highly recommend!',
      avatar: 'https://randomuser.me/api/portraits/thumb/women/75.jpg', 
    },
    {
      name: 'Bob Smith',
      rating: 4,
      review: 'I love how easy it is to log in with my MetaMask wallet. The transaction history feature helps me stay on top of all my investments.',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
    },
    {
      name: 'Charlie Lee',
      rating: 5,
      review: 'A must-have for crypto enthusiasts! It tracks my DeFi positions effortlessly, and the multi-chain support is a game changer.',
      avatar: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#1D232A] min-h-screen">
      <div className="max-w-4xl mx-auto text-left">
        <h2 className="text-3xl font-semibold text-white mb-8">What Our Users Say</h2>
        
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${i < review.rating ? 'fill-current' : 'fill-gray-300'}`}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 17.3l6.16 3.24-1.64-7.11L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.48 4.19-1.64 7.11L12 17.3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
