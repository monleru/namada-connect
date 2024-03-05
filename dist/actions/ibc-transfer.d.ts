import { Account, TokenType } from '../types/index';
import BigNumber from 'bignumber.js';
import { TokenInfo } from '../types/tx';
export type TxTransferArgs = TxArgs & {
    faucet?: string;
};
type TxArgs = {
    chainId?: string;
    account?: Account;
    token: TokenType;
    target: string;
    amount: BigNumber;
    memo?: string;
    feeAmount?: BigNumber;
    gasLimit?: BigNumber;
    disposableSigningKey?: boolean;
    nativeToken: string;
};
export declare const submitIbcTransferTransaction: (txTransferArgs: TxIbcTransferArgs) => Promise<void>;
export type TxIbcTransferArgs = Omit<TxArgs, "token"> & {
    chainId: string;
    channelId: string;
    portId: string;
    token: TokenInfo;
};
export {};
