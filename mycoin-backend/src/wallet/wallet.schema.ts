import { Schema, Document } from 'mongoose';

export const WalletSchema = new Schema({
  address: String,
  privateKey: String,
  password: String,
});

export interface Wallet extends Document {
  address: string;
  privateKey: string;
  password: string;
}
