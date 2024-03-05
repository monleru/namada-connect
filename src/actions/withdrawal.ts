import { Chain, DerivedAccount, SubmitWithdrawMsgValue } from "../types";
import { TxTransferArgs } from "./transfer";


export const submitWithdraw = async (
  txTransferArgs: TxTransferArgs
): Promise<void> => {
  const {
    account,
    chainId,
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

  
    const transferArgs:SubmitWithdrawMsgValue = {
        source: address,
        validator: address
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
    await signer.submitWithdraw(transferArgs, txArgs, type);
  };