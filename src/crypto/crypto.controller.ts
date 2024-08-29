import { Controller, Get, Query } from '@nestjs/common';
import { CryptoService } from './crypto.service';

@Controller('api/crypto')
export class CryptoController {
  private cryptoService = new CryptoService();

  @Get('price')
  async getPrice(
    @Query('id') id: string,
    @Query('useCoinMarketCap') useCoinMarketCap: boolean = false,
  ) {
    try {
      const price = await this.cryptoService.getPriceInBTC(id, useCoinMarketCap);
      return { price };
    } catch (error) {
      throw new Error('Error fetching cryptocurrency price');
    }
  }
}
