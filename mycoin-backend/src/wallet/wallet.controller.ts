import { Controller, Post, Body } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('create')
  async createWallet(@Body() body: { password: string }) {
    return this.walletService.createWallet(body.password);
  }

  @Post('access')
  async accessWallet(@Body() body: { privateKey: string; password: string }) {
    return this.walletService.accessWallet(body.privateKey, body.password);
  }
}
