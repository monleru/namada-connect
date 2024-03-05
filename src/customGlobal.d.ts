declare global {
  interface Window {
    namada: {
        getSigner(): any;
        accounts(chainId?: string): Promise<DerivedAccount[] | undefined>;
        balances(
          props: BalancesProps
        ): Promise<{ token: string; amount: string }[] | undefined>;
        connect(chainId?: string): Promise<void>;
        defaultAccount(chainId?: string): Promise<DerivedAccount | undefined>;
        sign(props: SignArbitraryProps): Promise<SignatureResponse | undefined>;
        verify(props: VerifyArbitraryProps): Promise<void>;
        submitTx: (props: TxMsgProps) => Promise<void>;
        getChain: () => Promise<Chain | undefined>;
        version: () => string;
          }
}
}

export type DerivedAccount = {
    id: string;
    address: string;
    owner?: string;
    publicKey?: string;
    alias: string;
    parentId?: string;
    path: Bip44Path;
    type: AccountType;
  };

export type TxMsgProps = {
    //TODO: figure out if we can make it better
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    txType: any;
    specificMsg: string;
    txMsg: string;
    type: AccountType;
  };
  
  export type SignArbitraryProps = {
    signer: string;
    data: string;
  };
  
  export type VerifyArbitraryProps = {
    publicKey: string;
    hash: string;
    signature: string;
  };
  
  export type BalancesProps = {
    owner: string;
    tokens: string[];
  };
  
  

  export type Currency = {
    token: string;
    address?: string;
    symbol: string;
    gasPriceStep?: {
      low: number;
      average: number;
      high: number;
    };
  };
  
  export enum BridgeType {
    IBC = "ibc",
    Ethereum = "ethereum-bridge",
  }
  
  // Define keys for supported extensions
  export type ExtensionKey = "namada" | "keplr" | "metamask";
  
  // Define keys for supported chains
  export type ChainKey = "namada" | "cosmos" | "ethereum";
  
  export type ExtensionInfo = {
    alias: string;
    id: ExtensionKey;
    url: string;
  };
  
  // Define constant with extension properties
  export const Extensions: Record<ExtensionKey, ExtensionInfo> = {
    namada: {
      alias: "Namada",
      id: "namada",
      // TODO: Update to most recent release
      url: "https://namada.me",
    },
    keplr: {
      alias: "Keplr",
      id: "keplr",
      url: "https://www.keplr.app/",
    },
    metamask: {
      alias: "Metamask",
      id: "metamask",
      url: "https://metamask.io/",
    },
  };
  
  export type Chain = {
    id: ChainKey;
    alias: string;
    bech32Prefix: string;
    bip44: {
      coinType: number;
    };
    bridgeType: BridgeType[];
    chainId: string;
    currency: Currency;
    extension: ExtensionInfo;
    rpc: string;
    ibc?: {
      portId: string;
    };
  };
  

  export type SignatureResponse = {
    hash: string;
    signature: string;
  };
  
  export interface Signer {
    accounts: (chainId?: string) => Promise<Account[] | undefined>;
    defaultAccount: (chainId?: string) => Promise<Account | undefined>;
    sign: (
      signer: string,
      data: string
    ) => Promise<SignatureResponse | undefined>;
    verify: (publicKey: string, hash: string, signature: string) => Promise<void>;
    submitBond(
      args: SubmitBondProps,
      txArgs: TxProps,
      type: AccountType
    ): Promise<void>;
    submitUnbond(
      args: SubmitUnbondProps,
      txArgs: TxProps,
      type: AccountType
    ): Promise<void>;
    submitWithdraw(
      args: SubmitWithdrawProps,
      txArgs: TxProps,
      type: AccountType
    ): Promise<void>;
    submitTransfer(
      args: TransferProps,
      txArgs: TxProps,
      type: AccountType
    ): Promise<void>;
    submitIbcTransfer(
      args: IbcTransferProps,
      txArgs: TxProps,
      type: AccountType
    ): Promise<void>;
    submitVoteProposal(
      args: SubmitVoteProposalProps,
      txArgs: TxProps,
      type: AccountType
    ): Promise<void>;
    submitEthBridgeTransfer(
      args: BridgeTransferProps,
      txArgs: TxProps,
      type: AccountType
    ): Promise<void>;
  }
  