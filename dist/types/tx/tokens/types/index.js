import { registeredCoinTypes } from "slip44";
const { NAMADA_INTERFACE_NAMADA_TOKEN: nativeToken = "tnam1q8ctk7tr337f85dw69q0rsrggasxjjf5jq2s2wph", } = process.env;
// Declare symbols for tokens we support:
// TODO: This will need to be refactored for mainnet!
export const Symbols = [
    "NAM",
    "BTC",
    "DOT",
    "ETH",
    "SCH",
    "APF",
    "KAR",
];
const supportedCoinTypes = [
    ...registeredCoinTypes.filter(([, , symbol]) => {
        return Symbols.indexOf(`${symbol}`) > -1;
    }),
];
export const Tokens = supportedCoinTypes.reduce((tokens, coinType) => {
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
// Map a few test addresses for now:
Tokens["NAM"] = Object.assign(Object.assign({}, Tokens["NAM"]), { url: "https://namada.net", address: nativeToken, symbol: "Naan" });
Tokens["DOT"] = Object.assign(Object.assign({}, Tokens["DOT"]), { address: "tnam1qyfl072lhaazfj05m7ydz8cr57zdygk375jxjfwx", coinGeckoId: "polkadot" });
Tokens["ETH"] = Object.assign(Object.assign({}, Tokens["ETH"]), { address: "tnam1qxvnvm2t9xpceu8rup0n6espxyj2ke36yv4dw6q5", coinGeckoId: "ethereum" });
Tokens["BTC"] = Object.assign(Object.assign({}, Tokens["BTC"]), { address: "tnam1qy8qgxlcteehlk70sn8wx2pdlavtayp38vvrnkhq", coinGeckoId: "bitcoin" });
Tokens["SCH"] = Object.assign(Object.assign({}, Tokens["SCH"]), { coin: "Schnitzel", symbol: "SCH", address: "tnam1q9f5yynt5qfxe28ae78xxp7wcgj50fn4syetyrj6" });
Tokens["APF"] = Object.assign(Object.assign({}, Tokens["APF"]), { coin: "Apfel", symbol: "APF", address: "tnam1qyvfwdkz8zgs9n3qn9xhp8scyf8crrxwuq26r6gy" });
Tokens["KAR"] = Object.assign(Object.assign({}, Tokens["KAR"]), { coin: "Kartoffel", symbol: "KAR", address: "tnam1qyx93z5ma43jjmvl0xhwz4rzn05t697f3vfv8yuj" });
//# sourceMappingURL=index.js.map