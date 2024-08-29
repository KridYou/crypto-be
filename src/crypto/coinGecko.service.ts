import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export class CoinGeckoService {
  async getPriceInBTC(cryptoId: string): Promise<number> {
    try {
      const response = await axios.get(`${COINGECKO_API_URL}/simple/price`, {
        params: {
          ids: cryptoId,
          vs_currencies: 'btc',
        },
      });
      return response.data[cryptoId]?.btc || 0;
    } catch (error) {
      console.error('Error fetching price from CoinGecko', error);
      throw new Error('Error fetching price from CoinGecko');
    }
  }
}
