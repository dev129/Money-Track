
async function fetchData(walletAddress, apiKey) {
  try {
    await Moralis.start({
      apiKey: apiKey
    });

    const response = await Moralis.EvmApi.balance.getNativeBalance({
      "chain": "0x1",
      "address": walletAddress
    });

    return response.raw.balance;
  } catch (e) {
    return null;  // Return null in case of an error
  }
}
module.exports.fetchData=fetchData;