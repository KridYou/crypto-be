import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard'

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get(':userId')
  @UseGuards(JwtAuthGuard)
  async getPortfolio(@Param('userId') userId: string) {
    return this.portfolioService.getUserPortfolio(userId);
  }
}
