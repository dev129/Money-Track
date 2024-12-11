// pages/api/fetchBalance.js
import { fetchData } from '../../test'; // Server-side logic

export default async function handler(req, res) {
  const { walletAddress, apiKey } = req.query;

  if (!walletAddress || !apiKey) {
    return res.status(400).json({ error: 'Missing walletAddress or apiKey' });
  }

  try {
    const balance = await fetchData(walletAddress, apiKey);
    res.status(200).json({ balance });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching balance' });
  }
}
