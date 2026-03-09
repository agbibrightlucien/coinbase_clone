import { useState } from "react";

const logoMap = {
  BTC:  "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
  ETH:  "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
  USDT: "https://assets.coingecko.com/coins/images/325/small/Tether.png",
  BNB:  "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
  XRP:  "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
  SOL:  "https://assets.coingecko.com/coins/images/4128/small/solana.png",
  USDC: "https://assets.coingecko.com/coins/images/6319/small/usdc.png",
  DOGE: "https://assets.coingecko.com/coins/images/5/small/dogecoin.png",
  ADA:  "https://assets.coingecko.com/coins/images/975/small/cardano.png",
  AVAX: "https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png",
  LINK: "https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png",
  SHIB: "https://assets.coingecko.com/coins/images/11939/small/shiba.png",
  DOT:  "https://assets.coingecko.com/coins/images/12171/small/polkadot.png",
  TRX:  "https://assets.coingecko.com/coins/images/1094/small/tron-logo.png",
  NEAR: "https://assets.coingecko.com/coins/images/10365/small/near.jpg",
};

export const CoinLogo = ({ ticker, color, size = 36 }) => {
  const [err, setErr] = useState(false);
  if (logoMap[ticker] && !err) {
    return <img src={logoMap[ticker]} alt={ticker} onError={() => setErr(true)}
      className="rounded-full object-cover flex-shrink-0"
      style={{ width: size, height: size }} />;
  }
  return (
    <div className="rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
      style={{ width: size, height: size, background: color, fontSize: size * 0.32 }}>
      {ticker.slice(0,2)}
    </div>
  );
};
