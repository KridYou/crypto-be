import { CoinGeckoService } from './coinGecko.service';
import { CoinMarketCapService } from './coinMarketCap.service';

export class CryptoService {
  private coinGeckoService = new CoinGeckoService();
  private coinMarketCapService = new CoinMarketCapService();

  async getPriceInBTC(cryptoId: string, useCoinMarketCap: boolean): Promise<number> {
    if (useCoinMarketCap) {
      return this.coinMarketCapService.getPriceInBTC(cryptoId);
    } else {
      return this.coinGeckoService.getPriceInBTC(cryptoId);
    }
  }
}
