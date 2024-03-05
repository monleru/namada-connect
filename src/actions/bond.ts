import { Chain, DerivedAccount, SubmitBondMsgValue, TokenType } from "../types";
import BigNumber from "bignumber.js";

export type TxBondArgs = TxArgs 
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


export const submitBond = async (
  txTransferArgs: TxBondArgs
): Promise<void> => {
  const {
    account,
    amount,
    chainId,
    disposableSigningKey,
    feeAmount,
    gasLimit,
    memo,
    nativeToken,
    validator
  } = txTransferArgs;

  if (!feeAmount || !gasLimit) {
    return;
  }

  const { address, publicKey, type } = account || (await window.namada.defaultAccount() as DerivedAccount)
  
    const signer  = await window.namada.getSigner()
    console.log(signer);

  
    const transferArgs:SubmitBondMsgValue = {
        amount,
        source: address,
        nativeToken,
        validator
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
    await signer.submitBond(transferArgs, txArgs, type);
  };