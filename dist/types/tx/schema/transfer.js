var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { field } from "@dao-xyz/borsh";
import { BigNumberSerializer } from "./utils";
export class TransferMsgValue {
    constructor(data) {
        Object.assign(this, data);
    }
}
__decorate([
    field({ type: "string" })
], TransferMsgValue.prototype, "source", void 0);
__decorate([
    field({ type: "string" })
], TransferMsgValue.prototype, "target", void 0);
__decorate([
    field({ type: "string" })
], TransferMsgValue.prototype, "token", void 0);
__decorate([
    field(BigNumberSerializer)
], TransferMsgValue.prototype, "amount", void 0);
__decorate([
    field({ type: "string" })
], TransferMsgValue.prototype, "nativeToken", void 0);
//# sourceMappingURL=transfer.js.map