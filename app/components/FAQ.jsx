'use client'
import { useState } from 'react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section className="py-12 px-6 bg-[#1D232A] min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6 text-left">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left py-4 px-6 flex justify-between items-center text-lg font-medium text-white focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${activeQuestion === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeQuestion === index && (
                <div className="py-4 px-6 text-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: 'How accurate is the availability information for parking spots?',
    answer:
      'The parking availability information is updated every 5 minutes to ensure you get real-time data. However, please be aware that the status of parking spots may change rapidly, so it\'s always a good idea to check before you head to a location.',
  },
  {
    question: 'How can I pay for parking?',
    answer:
      'You can make payments using either your MetaMask wallet for cryptocurrency payments or UPI for traditional payments. Both methods are secure and easy to use.',
  },
  {
    question: 'Can I cancel or modify my reservation?',
    answer:
      'Currently, ParkMate does not support the ability to change or cancel a parking reservation. Once you enter a parking spot, the process is completed, and no modifications can be made. Refunds are also not available at this time.',
  },
  {
    question: 'Are there electric vehicle (EV) charging stations available?',
    answer:
      'EV charging stations are available depending on the location. For areas with EV charging infrastructure, you’ll be able to see charging options in the app. Availability may vary by place.',
  },
  {
    question: 'How can I report an issue with a parking space or app feature?',
    answer:
      'If you encounter any issues, you can report them easily by visiting our "Contact Us" page within the app or on the website. Our support team will address your concerns promptly.',
  },
  {
    question: 'Is ParkMate available for businesses or commercial parking lots?',
    answer:
      'Yes, ParkMate is available for closed area spaces like malls and commercial properties. We help manage parking in such locations by providing real-time availability and easy payment methods.',
  },
  {
    question: 'How does ParkMate detect available parking spots?',
    answer:
      'ParkMate uses computer vision and sensors to detect available parking spaces. This technology ensures accurate and up-to-date information for users, making it easy to find a parking spot in crowded areas.',
  },
  {
    question: 'Can I view my parking history or receipts in the app?',
    answer:
      'Currently, ParkMate does not provide historical data or receipts through the app. We are considering adding this feature in the future, but for now, users can track only current parking availability.',
  },
];

export default FAQ;
