var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const submitTransferTransaction = (txTransferArgs) => __awaiter(void 0, void 0, void 0, function* () {
    const { account: { address, publicKey, type }, amount, chainId, target, token, // TODO: Re-enable
    disposableSigningKey, feeAmount, gasLimit, memo, nativeToken, } = txTransferArgs;
    if (!feeAmount || !gasLimit) {
        return;
    }
    const signer = yield window.namada.getSigner();
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
        chainId: chainId || (yield window.namada.getChain()).chainId,
        publicKey: publicKey,
        signer: undefined,
        disposableSigningKey,
        memo,
    };
    if (signer)
        yield signer.submitTransfer(transferArgs, txArgs, type);
});
//# sourceMappingURL=transfer.js.map