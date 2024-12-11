'use client'
import { AiOutlineArrowRight } from "react-icons/ai"; 
import React, { useState } from 'react';
import { 
  Wallet, 
  CreditCard, 
  ShieldCheck,
} from 'lucide-react';

const transactionData = {
  erc20Transactions: [
    { 
      id: 'ERC001', 
      token: 'USDC', 
      amount: 5000, 
      from: '0x1234...5678', 
      to: '0x8765...4321',
      date: '2024-02-16' 
    },
    { 
      id: 'ERC002', 
      token: 'DAI', 
      amount: 3250, 
      from: '0x9876...5432', 
      to: '0x2345...6789',
      date: '2024-02-17' 
    },
    { 
      id: 'ERC003', 
      token: 'USDT', 
      amount: 2750, 
      from: '0xaaaa...bbbb', 
      to: '0xcccc...dddd',
      date: '2024-02-18' 
    }
  ],
  nftTransactions: [
    { 
      id: 'NFT001', 
      name: 'CryptoPunk #5217', 
      price: 12.5, 
      from: '0x1111...2222', 
      to: '0x3333...4444',
      date: '2024-02-14' 
    },
    { 
      id: 'NFT002', 
      name: 'Bored Ape #789', 
      price: 8.2, 
      from: '0x5555...6666', 
      to: '0x7777...8888',
      date: '2024-02-15' 
    },
    { 
      id: 'NFT003', 
      name: 'Art Blocks #1234', 
      price: 5.7, 
      from: '0x9999...0000', 
      to: '0xeeee...1111',
      date: '2024-02-16' 
    }
  ],
  walletHistory: [
    { 
      id: 'WLT001', 
      type: 'Deposit', 
      amount: 0.5, 
      token: 'ETH',
      date: '2024-02-15' 
    },
    { 
      id: 'WLT002', 
      type: 'Withdrawal', 
      amount: 1.2, 
      token: 'BTC',
      date: '2024-02-16' 
    },
    { 
      id: 'WLT003', 
      type: 'Staking', 
      amount: 2.3, 
      token: 'USDC',
      date: '2024-02-17' 
    }
  ]
};

const Transactions = () => {
  const [activeTab, setActiveTab] = useState('erc20');

  const renderTransactionSection = () => {
    const transactions = transactionData[`${activeTab}Transactions`] || [];

    const getIcon = () => {
      switch(activeTab) {
        case 'erc20':
          return <CreditCard className="text-green-500 w-6 h-6 mr-2" />;
        case 'nft':
          return <ShieldCheck className="text-purple-500 w-6 h-6 mr-2" />;
        case 'walletHistory':
          return <Wallet className="text-white w-6 h-6 mr-2" />;
        default:
          return null;
      }
    };

    return (
      <div className="bg-white p-4 rounded-lg shadow-md h-full">
        <div className="flex items-center mb-4">
          {getIcon()}
          <h2 className="text-xl text-black font-semibold capitalize">
            {activeTab.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
        </div>
        <div className="space-y-3">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <div 
                key={transaction.id} 
                className="flex justify-between items-center border-b pb-2 last:border-b-0 text-black"
              >
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">
                      {activeTab === 'nft' 
                        ? transaction.name 
                        : `${transaction.amount} ${transaction.token || transaction.type || ''}`}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-black space-x-2">
                    <span className="truncate max-w-[100px]">{transaction.from}</span>
                    <AiOutlineArrowRight className="w-4 h-4" />
                    <span className="truncate max-w-[100px]">
                      {transaction.to || transaction.type || 'N/A'}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-black">{transaction.date}</span>
              </div>
            ))
          ) : (
            <div className="text-center text-black">No transactions found</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Transaction History</h1>
      
      {/* Layout Option 1: Grid Layout */}
      <div className="grid grid-cols-4 md:grid-cols-3 gap-6 mb-8">  

        {/* Transaction Details */}
        <div className="md:col-span-4">
          {renderTransactionSection()}
        </div>
      </div>

      {/* Layout Option 2: Flex Layout */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
        {['erc20', 'nft', 'walletHistory'].map((tab) => (
          <div 
            key={tab} 
            className={`flex-1 ${activeTab === tab ? 'border-2 border-blue-500' : 'border border-gray-200'} rounded-lg p-4`}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex items-center justify-between">
              {React.createElement(
                tab === 'erc20' ? CreditCard : 
                tab === 'nft' ? ShieldCheck : 
                Wallet, 
                { className: `w-6 h-6 ${activeTab === tab ? 'text-white' : 'text-gray-400'}` }
              )}
              <span className={`font-semibold ${activeTab === tab ? 'text-white' : 'text-white'}`}>
                {tab === 'erc20' ? 'ERC20' : tab === 'nft' ? 'NFT' : 'Wallet'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Layout Option 3: Last 3 Transactions */}
      
    </div>
  );
};

export default Transactions;
