'use client';
import { Wallet } from 'lucide-react'; // Wallet icon from lucide-react
import React from 'react';

// The wallet stats data
const walletStatsData = {
  nfts: "100",
  collections: "10",
  transactions: { total: "1000" },
  nft_transfers: { total: "1000" },
  token_transfers: { total: "1000" },
};

const WalletStats = () => {
  // Rendering the section for wallet stats
  const renderWalletStatsSection = () => {
    const stats = {
      nfts: walletStatsData.nfts,
      collections: walletStatsData.collections,
      totalTransactions: walletStatsData.transactions.total,
      nftTransfers: walletStatsData.nft_transfers.total,
      tokenTransfers: walletStatsData.token_transfers.total,
    };

    return (
      <div className="bg-white p-4 rounded-lg shadow-md h-full">
        <div className="flex items-center mb-4">
          <Wallet className="text-blue-500 w-6 h-6 mr-2" /> {/* Wallet Icon */}
          <h2 className="text-xl text-black font-semibold capitalize">Wallet Stats</h2>
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
                  <span className="font-medium capitalize">{key.replace('_', ' ')}</span>
                </div>
              </div>
              <span className="text-sm text-black">{stats[key]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Wallet Stats</h1>

      {/* Displaying Wallet Stats */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        <div className="md:col-span-1">
          {renderWalletStatsSection()}
        </div>
      </div>

      {/* Compliment to the User */}
      <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
        <p className="text-lg font-semibold text-green-600">
          You are maintaining a strong portfolio! Keep up the great work and stay consistent.
        </p>
      </div>
    </div>
  );
};

export default WalletStats;
    