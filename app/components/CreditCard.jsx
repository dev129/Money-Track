import React from 'react'
import GetBalance from './GetBalance'

const CreditCard = ({ walletAddress, apiKey }) => {
  return (
    <div className="w-full h-full flex items-center justify-center scale-125"> {/* Center the content inside the container */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full  max-w-sm"> {/* Set max width and full width */}
        <div className="px-6 py-4">
          <div className='flex text-center items-center justify-center '>
            <img className="h-8 mr-2" src="https://cdn-icons-png.flaticon.com/512/1958/1958738.png" alt="Workflow logo" />
            <span className='text-black '> BLOCKCHAIN CARD</span>
          </div>
          <div className="mt-4">
            <div className="font-bold text-gray-800 text-xl">{walletAddress}</div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-sm text-gray-600">WALLET ADDRESS</div>
              <img className="h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZaVpfhv3kgZA46GoqfVNIFhR6pXIdX4_Rg&s" alt="Mastercard logo" />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-6 py-4">
          <div className="font-medium text-gray-600">Current Balance</div>
          <div className="text-lg font-bold text-gray-800 mt-2">
            <GetBalance walletAddress={walletAddress} apiKey={apiKey} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
