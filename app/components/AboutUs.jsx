const AboutUs = () => {
  return (
    <section className="py-16 bg-[#1D232A] text-white min-h-screen " >
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white mb-8">Who are we?</h2>

        <p className="text-lg text-white mb-8">
          We are a dedicated team passionate about solving parking challenges. Our goal is to simplify the parking experience for drivers by providing an easy, automated system that helps you find available parking spots quickly and efficiently.
        </p>

        {/* Mission Statement */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
          <p className="text-lg text-white">
            At ParkMate, our mission is to create a seamless parking experience for everyone. We aim to reduce the time spent searching for parking and make the process as convenient as possible. With the power of automation, our system helps drivers find and pay for available parking spots with ease.
          </p>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Automated Parking Spot Detection</h4>
            <p className="text-gray-600">
              Our system uses advanced <strong>computer vision</strong> and <strong>sensors</strong> to detect available parking spots. This ensures that drivers have access to accurate information about open spaces.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Easy Payment Options</h4>
            <p className="text-gray-600">
              Pay for parking seamlessly using <strong>MetaMask</strong> for cryptocurrency payments or <strong>UPI</strong> for traditional methods. Our payment options are secure and user-friendly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Available in Commercial Spaces</h4>
            <p className="text-gray-600">
              ParkMate is designed to work in <strong>closed area spaces</strong> like malls and commercial parking lots. Our platform helps businesses manage parking efficiently and provides drivers with easy access to available spots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
