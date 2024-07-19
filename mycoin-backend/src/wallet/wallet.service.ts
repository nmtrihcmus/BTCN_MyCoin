import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './wallet.schema';
import { Wallet as EthersWallet } from 'ethers';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
  ) {}

  async createWallet(password: string): Promise<any> {
    const wallet = EthersWallet.createRandom();
    const { address, privateKey } = wallet;

    // Store wallet info in MongoDB
    const newWallet = new this.walletModel({ address, privateKey, password });
    await newWallet.save();

    return { address, privateKey };
  }

  async accessWallet(privateKey: string, password: string): Promise<any> {
    const wallet = await this.walletModel.findOne({ privateKey, password });

    if (!wallet) {
      throw new Error('Invalid credentials');
    }

    return wallet;
  }
}
