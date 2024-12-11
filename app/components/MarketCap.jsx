import React from 'react';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { FaBitcoin, FaEthereum, FaApple } from 'react-icons/fa';
import StockDown from '../public/StockDown.png';
import Image from 'next/image';

// Raw market data
const marketData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    marketCap: 850000000000,
    change: 1.5,
    logo: <FaBitcoin size={40} />,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    marketCap: 400000000000,
    change: -2.3,
    logo: <FaEthereum size={40} />,
  },
  {
    name: "Apple",
    symbol: "AAPL",
    marketCap: 2500000000000,
    change: 0.8,
    logo: <FaApple size={40} />,
  }
];

const MarketCap = () => {
  return (
    <div className="  "> {/* Full screen height */}
      {/* Background Image - Now covering full container */}
     
      
      {/* Overlay Content with semi-transparent background */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 p-6">
        <h1 className="text-4xl font-bold text-white mb-8">Market Overview</h1>
        
        <div className="w-full max-w-2xl space-y-4"> {/* Wider container for market breakdown */}
          {marketData.map((asset, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-4  rounded-xl shadow-lg "
            >
              {/* Asset Logo */}
              <div className="flex items-center">
                {asset.logo}
                <div className="ml-3">
                  <span className="font-semibold text-lg">{asset.name}</span>
                  <span className="text-gray-500"> ({asset.symbol})</span>
                </div>
              </div>

              {/* Market Cap and Change */}
              <div className="flex flex-col items-end">
                <div className="text-xl font-semibold">
                  ${asset.marketCap.toLocaleString()}
                </div>
                <div className={`flex items-center ${asset.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {asset.change > 0 ? <GoTriangleUp /> : <GoTriangleDown />}
                  <span className="ml-1">{Math.abs(asset.change)}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketCap;