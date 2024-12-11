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
        <h2 className="text-3xl font-semibold  mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6 text-left">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left py-4 px-6 flex justify-between items-center text-lg font-medium text-white  focus:outline-none"
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
    question: 'How do I log in to my account?',
    answer:
      'You can log in using your web3 wallet. We support Coinbase Wallet, MetaMask, and OKX Wallet. Simply connect your wallet and access your account to start tracking your crypto investments.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, your data is secure. Our platform is based on web3 technology, ensuring that your wallet and investment data remain private and encrypted. We do not store your private keys or sensitive information.',
  },
  {
    question: 'Can I track my crypto investments?',
    answer:
      'Yes, our platform allows you to track your crypto portfolio, see your profit and loss, and analyze your investment performance over time. You can view your transaction history and wallet statistics.',
  },
  {
    question: 'What are DeFi positions and how can I check them?',
    answer:
      'DeFi (Decentralized Finance) positions represent your investments in decentralized finance protocols. You can check your active DeFi positions and track their performance directly from your dashboard.',
  },
  {
    question: 'What are active chains?',
    answer:
      'Active chains refer to the blockchains on which your assets are being tracked. Our platform supports multiple blockchains, and you can monitor your assets across different chains simultaneously.',
  },
];

export default FAQ;
