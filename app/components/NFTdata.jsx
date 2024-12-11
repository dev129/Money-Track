'use client';
import { Wallet } from 'lucide-react'; // Wallet icon from lucide-react
import React from 'react';

// The wallet stats data for NFTs
const walletStatsData = {
  totalTokens: "3500", // Example total amount of tokens (ERC20, ERC721, etc.)
  totalTransfers: "50", // Total number of transfers
  totalEarnings: "120.5", // Total earnings from NFT sales in USD (or other currency)
  nftTransfers: { total: "40" }, // Total NFT transfers
  tokenTransfers: { total: "10" }, // Total token transfers
};

const WalletStats = () => {
  // Rendering the section for wallet stats
  const renderWalletStatsSection = () => {
    const stats = {
      totalTokens: walletStatsData.totalTokens,
      totalTransfers: walletStatsData.totalTransfers,
      totalEarnings: walletStatsData.totalEarnings,
      nftTransfers: walletStatsData.nftTransfers.total,
      tokenTransfers: walletStatsData.tokenTransfers.total,
    };

    return (
      <div className="bg-white p-4 rounded-lg shadow-md h-full">
        <div className="flex items-center mb-4">
          <Wallet className="text-blue-500 w-6 h-6 mr-2" /> {/* Wallet Icon */}
          <h2 className="text-xl text-black font-semibold capitalize">NFT Portfolio Stats</h2>
        </div>
        <div className="space-y-3">
          {/* Displaying each wallet stat */}
          {Object.keys(stats).map((key) => (
            <div
              key={key}
              className="flex justify-between items-center border-b pb-2 last:border-b-0 text-black"
            >
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="font-medium capitalize">
                    {key === 'totalTokens' ? 'Total Tokens' : key.replace('_', ' ')}
                  </span>
                </div>
              </div>
              <span className="text-sm text-black">
                {key === 'totalEarnings' ? `$${stats[key]}` : stats[key]}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">NFT Portfolio Stats</h1>

      {/* Displaying Wallet Stats */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        <div className="md:col-span-1">
          {renderWalletStatsSection()}
        </div>
      </div>

      {/* Compliment to the User */}
      <div className="bg-black pl-20 w-full  rounded-lg shadow-md text-center">
  <img className="scale-x-105 object-cover rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmGmvdZVRUbQfa9wFanMgu12oanQJkV_CzLw&s" alt="image" />
</div>

      
    </div>
  );
};

export default WalletStats;
