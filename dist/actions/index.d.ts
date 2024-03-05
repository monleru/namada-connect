import { DerivedAccount } from "types";
export declare class InitNamada {
    nativeToken: string;
    constructor(nativeToken: string);
    transfer: (to: string, amount: number, memo?: string, chainId?: string, account?: DerivedAccount) => Promise<void>;
    bond: (validator: string, amount: number, memo?: string, chainId?: string, account?: DerivedAccount) => Promise<void>;
    unBond: (validator: string, amount: number, memo?: string, chainId?: string, account?: DerivedAccount) => Promise<void>;
    voteProposal: (proposalId: number, vote: 'nay' | 'yay' | 'abstain', memo?: string, chainId?: string, account?: DerivedAccount) => Promise<void>;
    getAccounts: () => Promise<import("../customGlobal").DerivedAccount[] | undefined>;
    getSigner: () => Promise<any>;
    getChainId: () => Promise<string | undefined>;
    getDefaultAccount: () => Promise<import("../customGlobal").DerivedAccount | undefined>;
    login: () => Promise<import("../customGlobal").DerivedAccount[] | undefined>;
}
