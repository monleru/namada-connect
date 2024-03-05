import BigNumber from "bignumber.js";
import { DerivedAccount } from "../types";
export type TxVoteProposalArgs = TxArgs;
type TxArgs = {
    chainId: string;
    account: DerivedAccount;
    nativeToken: string;
    memo?: string;
    feeAmount?: BigNumber;
    gasLimit?: BigNumber;
    disposableSigningKey?: boolean;
    proposalId: number;
    vote: 'nay' | 'yay' | 'abstain';
};
export declare const submitVoteProposal: (txTransferArgs: TxVoteProposalArgs) => Promise<void>;
export {};
