import { Account, DerivedAccount } from "../types";
import { submitTransferTransaction } from "./transfer";
import BigNumber from "bignumber.js";
import { submitBond } from "./bond";
import { submitUnBond } from "./unbond";
import { submitVoteProposal } from "./vote-proposal";

export class InitNamada {
    nativeToken:string;

    constructor(nativeToken: string) {
        this.nativeToken = nativeToken
    } 

    transfer = async (to: string, amount: number, memo: string = '', chainId?: string, account?: DerivedAccount ) => {
        await submitTransferTransaction({
            target: to,
            amount: BigNumber(amount),
            token: "NAM",
            feeAmount: new BigNumber(10),
            gasLimit: new BigNumber(100),
            disposableSigningKey: false,
            memo: memo,
            nativeToken: this.nativeToken,
            account: account || (await this.getDefaultAccount() as DerivedAccount),
            chainId: chainId || (await this.getChainId() as string)
          })
    }

    bond = async (validator: string, amount: number, memo: string = '', chainId?: string, account?: DerivedAccount ) => {
        await submitBond({
            validator,
            amount: BigNumber(amount),
            feeAmount: new BigNumber(10),
            gasLimit: new BigNumber(100),
            disposableSigningKey: false,
            memo: memo,
            nativeToken: this.nativeToken,
            account: account || (await this.getDefaultAccount() as DerivedAccount),
            chainId: chainId || (await this.getChainId() as string)
          })
    }

    unBond = async (validator: string, amount: number, memo: string = '', chainId?: string, account?: DerivedAccount ) => {
        await submitUnBond({
            validator,
            amount: BigNumber(amount),
            feeAmount: new BigNumber(10),
            gasLimit: new BigNumber(100),
            disposableSigningKey: false,
            memo: memo,
            nativeToken: this.nativeToken,
            account: account || (await this.getDefaultAccount() as DerivedAccount),
            chainId: chainId || (await this.getChainId() as string)
          })
    }

    voteProposal = async (proposalId: number, vote: 'nay' | 'yay' | 'abstain', memo: string = '', chainId?: string, account?: DerivedAccount ) => {
        await submitVoteProposal({
            feeAmount: new BigNumber(10),
            gasLimit: new BigNumber(100),
            disposableSigningKey: false,
            memo: memo,
            nativeToken: this.nativeToken,
            account: account || (await this.getDefaultAccount() as DerivedAccount),
            chainId: chainId || (await this.getChainId() as string),
            vote,
            proposalId
          })
    }

    getAccounts = async () => {
        return await window.namada.accounts()
    }

    getSigner = async () => {
        return await window.namada.getSigner()
    }

    getChainId = async () => {
        return (await window.namada.getChain())?.chainId
    }

    getDefaultAccount = async () => {
        return await window.namada.defaultAccount() 
    }

    login = async () => {
        await window.namada.connect()
        return this.getAccounts()
    }
}