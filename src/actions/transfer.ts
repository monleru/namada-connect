import { Chain, DerivedAccount } from '../customGlobal';
import { Account,TokenType } from '../types/index'
import BigNumber from 'bignumber.js';

export type TxTransferArgs = TxArgs 
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

export const submitTransferTransaction = async (
    txTransferArgs: TxTransferArgs
  ): Promise<void> => {
    const {
      account:{ address, publicKey, type },
      amount,
      chainId,
      target,
      token, // TODO: Re-enable
      disposableSigningKey,
      feeAmount,
      gasLimit,
      memo,
      nativeToken,
    } = txTransferArgs;

    if (!feeAmount || !gasLimit) {
      return;
    }
    const signer  = await window.namada.getSigner()
    const transferArgs = {
      source: address,
      target,
      token: token, // TODO: Update to support other tokens again!
      amount,
      nativeToken,
    };
  
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

    if (signer) await signer.submitTransfer(transferArgs, txArgs, type);
  };