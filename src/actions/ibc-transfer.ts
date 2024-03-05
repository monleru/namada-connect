import { Account,Chain,DerivedAccount,IbcTransferMsgValue,TokenType } from '../types/index'
import BigNumber from 'bignumber.js';
import { TokenInfo } from '../types/tx'
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

export const submitIbcTransferTransaction = async (
    txTransferArgs: TxIbcTransferArgs
  ): Promise<void> => {
    const {
      account,
      amount,
      chainId,
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

    const { address, publicKey, type } = account || (await window.namada.defaultAccount() as DerivedAccount)
  
  
    const signer  = await window.namada.getSigner()
    console.log(signer);
    const transferArgs:IbcTransferMsgValue = {
      source: address,
      channelId: "channel-228",
      token: token.address,
      amount,
      receiver: address,
      portId: "50",
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

    console.log(signer);
    await signer.submitIbcTransfer(transferArgs, txArgs, type);
  };

  export type TxIbcTransferArgs = Omit<TxArgs, "token"> & {
    chainId: string;
    channelId: string;
    portId: string;
    token: TokenInfo;
  };
  