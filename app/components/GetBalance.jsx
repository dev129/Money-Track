// app/GetBalance.jsx (Client Component)
'use client'; // Ensures this is a Client Component
import React, { useState, useEffect } from 'react';
import Moralis from 'moralis'; // Make sure you have Moralis installed
import Spinner from './Spinner';

// Async function to fetch balance from Moralis
async function fetchData(walletAddress, apiKey) {
  try {
    await Moralis.start({
      apiKey: apiKey
    });

    const response = await Moralis.EvmApi.balance.getNativeBalance({
      "chain": "0x1",  // Ethereum mainnet
      "address": walletAddress
    });

    return response.raw.balance;
  } catch (e) {
    console.error(e);
    return null;  // Return null if an error occurs
  }
}

const GetBalance = ({ walletAddress, apiKey }) => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getBalance = async () => {
      setLoading(true);
      try {
        const fetchedBalance = await fetchData(walletAddress, apiKey);
        setBalance(fetchedBalance);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getBalance();
  }, [walletAddress, apiKey]);  // This will rerun the effect if walletAddress or apiKey changes

  if (loading || error || balance===null) {
    return <Spinner/>;
  }

  return (
    
      <h4>{balance} ETH</h4>
    
  );
};

export default GetBalance;
