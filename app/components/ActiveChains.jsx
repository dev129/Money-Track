'use client';
import React from 'react';

const ActiveChain = () => {
  // Data passed for the active chain
  const activeChainData = {
    address: "0x057Ec652A4f150f7FF94f089A38008f49a0DF88e",
    active_chains: {
      chain: "eth", // Ethereum chain
      chain_id: "0x1", // Mainnet Chain ID
      first_transaction: {
        block_number: "123456789",
        block_timestamp: "2022-08-23T20:58:31.000Z",
        transaction_hash: "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09"
      },
      last_transaction: {
        block_number: "123456789",
        block_timestamp: "2022-08-23T20:58:31.000Z",
        transaction_hash: "0x2d30ca6f024dbc1307ac8a1a44ca27de6f797ec22ef20627a1307243b0ab7d09"
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Active Chain Info</h2>

      {/* Active Chain Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 text-black">

        {/* Chain Name */}
        <div className="bg-white p-2 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold">Chain</h3>
          <p className="text-sm text-black">{activeChainData.active_chains.chain}</p>
        </div>

        {/* Chain ID */}
        <div className="bg-white p-2 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold">Chain ID</h3>
          <p className="text-sm text-black">{activeChainData.active_chains.chain_id}</p>
        </div>

        {/* First Transaction Block Number */}
        <div className="bg-white p-2 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold">First Block #</h3>
          <p className="text-sm text-black">{activeChainData.active_chains.first_transaction.block_number}</p>
        </div>

        {/* Last Transaction Hash */}
        <div className="bg-white p-2 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold">Last TX Hash</h3>
          <p className="text-sm text-black truncate">{activeChainData.active_chains.last_transaction.transaction_hash}</p>
        </div>
      </div>
      <div className="bg-white mt-5 rounded-lg shadow-md text-center">
        <p className="text-lg font-semibold text-black">
            <button className='hover:scale-50'>

          Tell Me More
            </button>
        </p>
      </div>
    </div>
  );
};

export default ActiveChain;
