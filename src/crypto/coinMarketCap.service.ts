import axios from 'axios';

const COINMARKETCAP_API_URL = 'https://pro-api.coinmarketcap.com/v1';
const COINMARKETCAP_API_KEY = 'YOUR_COINMARKETCAP_API_KEY';

export class CoinMarketCapService {
  async getPriceInBTC(cryptoSymbol: string): Promise<number> {
    try {
      const response = await axios.get(`${COINMARKETCAP_API_URL}/cryptocurrency/quotes/latest`, {
        params: {
          symbol: cryptoSymbol,
          convert: 'BTC',
        },
        headers: {
          'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY,
        },
      });
      return response.data.data[cryptoSymbol]?.quote?.BTC?.price || 0;
    } catch (error) {
      console.error('Error fetching price from CoinMarketCap', error);
      throw new Error('Error fetching price from CoinMarketCap');
    }
  }
}
