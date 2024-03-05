import { registeredCoinTypes } from "slip44";
// Tokens in Cosmos ecosystem
export const CosmosSymbols = ["ATOM", "OSMO"];
const CosmosTokenDenoms = [
    ["uatom", "ATOM"],
    ["uosmo", "OSMO"],
];
const tokenDenomLookup = (param) => CosmosTokenDenoms.find((tokenDenom) => tokenDenom.includes(param));
export const tokenByMinDenom = (minDenom) => {
    const tokenDenom = tokenDenomLookup(minDenom);
    return tokenDenom ? tokenDenom[1] : "";
};
export const minDenomByToken = (token) => {
    const tokenDenom = tokenDenomLookup(token);
    return tokenDenom ? tokenDenom[0] : "";
};
const supportedCoinTypes = registeredCoinTypes.filter(([, , symbol]) => {
    return CosmosSymbols.includes(`${symbol}`);
});
export const CosmosTokens = supportedCoinTypes.reduce((tokens, coinType) => {
    const [type, path, symbol = "", coin, url = ""] = coinType;
    tokens[`${symbol}`] = {
        address: "",
        type,
        path,
        symbol,
        coin,
        url,
    };
    return tokens;
}, {});
CosmosTokens["ATOM"].coinGeckoId = "cosmos";
// NOTE: Osmosis does not have a SLIP-044 entry:
CosmosTokens["OSMO"] = {
    symbol: "OSMO",
    type: 0,
    path: 0,
    coin: "Osmo",
    url: "https://osmosis.zone/",
    address: "",
    coinGeckoId: "osmosis",
};
//# sourceMappingURL=Cosmos.js.map