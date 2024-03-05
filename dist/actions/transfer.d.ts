import { DerivedAccount } from '../customGlobal';
import { TokenType } from '../types/index';
import BigNumber from 'bignumber.js';
export type TxTransferArgs = TxArgs;
type TxArgs = {
    chainId: string;
    account: DerivedAccount;
    token: TokenType;
    target: string;
    amount: BigNumber;
    memo?: string;
    feeAmount?: BigNumber;
    gasLimit?: BigNumber;
    disposableSigningKey?: boolean;
    nativeToken: string;
};
export declare const submitTransferTransaction: (txTransferArgs: TxTransferArgs) => Promise<void>;
export {};
