import React from 'react'
import MarketCap from './MarketCap'
import CreditCard from './CreditCard'
import Transactions from './Transactions'
import BentoDeFiPosition from './DefiPosition'
import ProfitLoss from './ProfitAndLoss'
import WalletStats from './WalletStats'
import NFTdata from '../components/NFTdata'
import ActiveChain from './ActiveChains'
const SignedIn = ({walletAddress,apiKey}) => {
  return (
    <>
    <div className='min-h-screen grid grid-rows-8 grid-cols-12 gap-0.5'>
      <div className='bg-black row-span-4 col-span-4'><NFTdata/></div>
      <div className='bg-black col-span-4 row-span-2'><ActiveChain/></div>
      <div className='  col-span-4 row-span-4 flex items-center justify-center object-contain rounded-3xl relative' ><MarketCap className='w-full h-full absolute top-0 left-0 '/></div>
      <div className='bg-black rounded-3xl row-span-4 col-span-4 '> <CreditCard walletAddress={walletAddress} apiKey={apiKey} className='w-full h-full absolute top-0 left-0'/></div>
      <div className='bg-black h-full row-span-4 col-span-4'><WalletStats/></div>
      <div className='bg-black row-span-4 col-span-4'><Transactions/></div>
      <div className='bg-black row-span-2 col-span-2'><BentoDeFiPosition/></div>
      <div className='bg-black row-span-2 col-span-2'><ProfitLoss/></div>
    </div>
    
    </>
  )
}

export default SignedIn