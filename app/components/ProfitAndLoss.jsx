import React from 'react';

const InfoBox = ({ title, value, percent, isPositive }) => {
  return (
    <div className='bg-white p-3 flex flex-col items-center justify-center rounded-lg shadow-sm text-xs'>
      <h3 className='font-semibold text-gray-800'>{title}</h3>
      <p className={`${isPositive ? 'text-green-600' : 'text-red-600'}`}>{isPositive ? `+ $${value}` : `- $${value}`}</p>
      {percent && <p className={`${isPositive ? 'text-green-600' : 'text-red-600'}`}>{isPositive ? `+ ${percent}%` : `- ${percent}%`}</p>}
    </div>
  );
};

const ProfitLoss = () => {
  return (
    <>
      <div className='text-2xl text-center font-bold '>Profit & Loss</div>
      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        <InfoBox title="Stk USDC" value={200} percent={4} isPositive={true} />
        <InfoBox title="LP ETH/USDT" value={150} percent={2} isPositive={false} />
        <InfoBox title="Comp DAI" value={80} percent={3} isPositive={true} />
        <InfoBox title="Farm UNI" value={50} percent={1.5} isPositive={false} />
        <InfoBox title="Total Profit" value={300} isPositive={true} />
        <InfoBox title="Total Loss" value={200} isPositive={false} />
      </div>
    </>
  );
};

const DefiPosition = () => {
  return (
    <>
      <div className='text-2xl text-center font-bold mb-4'>DeFi Position</div>
      <div className='grid grid-cols-2 grid-rows-2 gap-2'>
        <InfoBox title="Staked USDC" value={5000} percent="4.0" isPositive={true} />
        <InfoBox title="LP ETH/USDT" value={2.3} percent="6.5" isPositive={true} />
        <InfoBox title="Staked DAI" value={10000} percent="3.5" isPositive={true} />
        <InfoBox title="Farm UNI" value={50} percent="5.0" isPositive={true} />
      </div>
    </>
  );
};

const Dashboard = () => {
  return (
    <div className='container mx-auto p-4'>
      {/* Profit & Loss Section */}
      <ProfitLoss />
    </div>
  );
};

export default Dashboard;
