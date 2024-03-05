import { DerivedAccount } from '../types/index';
import BigNumber from 'bignumber.js';
import { TokenInfo } from '../types/tx';
export declare const submitIbcTransferTransaction: (txTransferArgs: TxIbcTransferArgs) => Promise<void>;
export type TxIbcTransferArgs = Omit<TxArgs, "token"> & {
    chainId: string;
    channelId: string;
    portId: string;
    token: TokenInfo;
};
type TxArgs = {
    chainId: string;
    account: DerivedAccount;
    amount: BigNumber;
    nativeToken: string;
    validator: string;
    memo?: string;
    feeAmount?: BigNumber;
    gasLimit?: BigNumber;
    disposableSigningKey?: boolean;
};
export {};
