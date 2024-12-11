import React from 'react';

const  DefiPosition = () => {
  return (
    <>
      <div className='text-xl text-center font-bold mb-2'>DeFi Position</div>
      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        {/* Position 1 */}
        <div className='bg-white p-3 flex flex-col items-center justify-center rounded-lg shadow-sm text-xs'>
          <h3 className='font-semibold text-gray-800'>Stk USDC</h3>
          <p className='text-gray-600'>$5K</p>
          <p className='text-gray-600'>8% APY</p>
        </div>
        
        {/* Position 2 */}
        <div className='bg-white p-3 flex flex-col items-center justify-center rounded-lg shadow-sm text-xs'>
          <h3 className='font-semibold text-gray-800'>LP ETH/USDT</h3>
          <p className='text-gray-600'>$10K</p>
          <p className='text-gray-600'>1.5 ETH + 2K USDT</p>
        </div>

        {/* Position 3 */}
        <div className='bg-white p-3 flex flex-col items-center justify-center rounded-lg shadow-sm text-xs'>
          <h3 className='font-semibold text-gray-800'>Comp DAI</h3>
          <p className='text-gray-600'>$2.5K</p>
          <p className='text-gray-600'>5% APY</p>
        </div>

        {/* Position 4 */}
        <div className='bg-white p-3 flex flex-col items-center justify-center rounded-lg shadow-sm text-xs'>
          <h3 className='font-semibold text-gray-800'>Farm UNI</h3>
          <p className='text-gray-600'>$3.5K</p>
          <p className='text-gray-600'>12% APY</p>
        </div>

        {/* Total */}
        <div className='bg-white p-3 flex flex-col items-center justify-center rounded-lg shadow-sm text-xs'>
          <h3 className='font-semibold text-gray-800'>Total</h3>
          <p className='text-gray-600'>$21K</p>
        </div>
        
        {/* Active Positions */}
        <div className='bg-white p-3 flex flex-col items-center justify-center rounded-lg shadow-sm text-xs'>
          <h3 className='font-semibold text-gray-800'>Active </h3>
          <p className='text-gray-600'>4 Pos</p>
        </div>
      </div>
    </>
  );
};

export default DefiPosition;
