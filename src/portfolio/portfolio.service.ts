import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioService {
  async getUserPortfolio(userId: string): Promise<any> {
    // Replace with actual data fetching logic
    return [
      {
        id: '1',
        name: 'Bitcoin',
        symbol: 'BTC',
        logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        priceInBTC: 1.0,
        profitLoss: '+5%',
      },
      {
        id: '2',
        name: 'Ethereum',
        symbol: 'ETH',
        logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
        priceInBTC: 0.06,
        profitLoss: '-2%',
      },
    ];
  }
}
