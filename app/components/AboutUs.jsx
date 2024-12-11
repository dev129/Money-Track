const AboutUs = () => {
    return (
      <section className="py-16 bg-[#1D232A] text-white min-h-screen">
        <div className="max-w-6xl mx-auto text-center px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-white mb-8">Who are we ?</h2>
  
          <p className="text-lg text-white mb-8">
            We are a passionate team of blockchain and cryptocurrency enthusiasts dedicated to helping you manage your crypto investments with ease and security. Our platform is built on the principles of decentralization, security, and user empowerment.
          </p>
  
          {/* Mission Statement */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-white">
              Our mission is simple: to provide a secure, easy-to-use platform that helps you track your crypto investments in real-time. Whether you're a seasoned investor or a beginner, our web3-based system allows you to access your data securely and make informed decisions about your portfolio.
            </p>
          </div>
  
          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Web3-Based Security</h4>
              <p className="text-gray-600">
                Our platform leverages the power of web3 technology to ensure that your wallet data is safe and secure, with no need to store sensitive information on centralized servers.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Real-Time Portfolio Tracking</h4>
              <p className="text-gray-600">
                Track your crypto assets and DeFi positions in real-time, allowing you to see how your investments are performing across various blockchains.
              </p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Multi-Wallet Support</h4>
              <p className="text-gray-600">
                Log in seamlessly using popular wallets like Coinbase Wallet, MetaMask, or OKX Wallet, and easily manage your crypto portfolio in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  