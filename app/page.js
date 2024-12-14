// app/page.jsx (Server Component)
import React from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';  // Clerk for authentication
import SignedOut from './components/SignedOut';
import SignedIn from './components/SignedIn';

export default async function Page() {
  const { userId } = await auth();  // Get userId from Clerk (authentication)
  
  if (!userId) {
    return <SignedOut/>;
  }

  const user = await currentUser();
  if (!user) {
    return <div>Unable to fetch user information. Please try again later.</div>;
  }

  const walletAddress = user.web3Wallets?.[0]?.web3Wallet || 'No wallet address available';
  const apiKey = process.env.MORALIS_API_KEY;
  
  // URL of the image to be processed

  return (<SignedIn walletAddress={walletAddress} apiKey={apiKey}/>
  );
}
