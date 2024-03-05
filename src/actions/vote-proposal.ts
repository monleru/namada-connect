import BigNumber from "bignumber.js";
import { Chain, DerivedAccount, Signer, SubmitBondMsgValue, SubmitVoteProposalMsgValue } from "../types";

export type TxVoteProposalArgs = TxArgs 
type TxArgs = {
  chainId: string;
  account: DerivedAccount;
  nativeToken: string;
  memo?: string;
  feeAmount?: BigNumber;
  gasLimit?: BigNumber;
  disposableSigningKey?: boolean;
  proposalId: number;
  vote: 'nay' | 'yay' | 'abstain'
};


export const submitVoteProposal = async (
  txTransferArgs: TxVoteProposalArgs
): Promise<void> => {
  const {
    account,
    chainId,
    proposalId,
    vote, // TODO: Re-enable
    disposableSigningKey,
    feeAmount,
    gasLimit,
    memo,
    nativeToken,
  } = txTransferArgs;

  if (!feeAmount || !gasLimit) {
    return;
  }

  const { address, publicKey, type } = account || (await window.namada.defaultAccount() as DerivedAccount)
  
  
    const signer  = await window.namada.getSigner()
    console.log(signer);

  
    const transferArgs:SubmitVoteProposalMsgValue = {
        proposalId: BigInt(proposalId),
        signer: address,
        vote
    }
    const txArgs = {
      token: nativeToken, // TODO: Update to support other tokens again!
      nativeToken,
      feeAmount,
      gasLimit,
      chainId: chainId || (await window.namada.getChain() as Chain).chainId,
      publicKey: publicKey,
      signer: undefined,
      disposableSigningKey,
      memo,
    };

    console.log(signer);
    await signer.submitVoteProposal(transferArgs, txArgs, type);
  };